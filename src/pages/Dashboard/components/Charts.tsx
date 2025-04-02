import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  ChartData,
} from 'chart.js';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from 'pages/Details/DetailsUtils';
import {guildStatistic} from '../../../DATA';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const Charts = () => {
  const {language} = useAppSelector(selectUserConfiguration);

  const extractedData = useMemo(
    () =>
      guildStatistic.reduce<Record<string, (string | number)[]>>(
        (acc, {date, total, rate, newbies}) => {
          acc.labels.push(date);
          acc.total.push(total);
          acc.rate.push(rate);
          acc.newbies.push(newbies);
          return acc;
        },
        {labels: [], total: [], rate: [], newbies: []}
      ),
    []
  );

  const createGradient = useCallback((ctx: CanvasRenderingContext2D | null, color: string) => {
    if (!ctx) return color;
    const gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'white');

    return gradient;
  }, []);

  const createChartData = useCallback(
    (ctx: CanvasRenderingContext2D | null, data: number[], color: string): ChartData<'line'> => ({
      labels: extractedData.labels,
      datasets: [
        {
          label: 'value',
          data,
          borderColor: color,
          backgroundColor: createGradient(ctx, color),
          tension: 0.3,
          fill: true,
          pointBackgroundColor: color,
        },
      ],
    }),
    [extractedData.labels, createGradient]
  );

  const createOptions = (text: string) => {
    const color = 'rgb(238 238 238)';
    return {
      scales: {
        x: {
          display: true,
          grid: {color},
          border: {color},
        },
        y: {
          display: true,
          grid: {color},
          border: {color},
        },
      },
      animation: {
        duration: 2500,
        easing: 'easeInOutQuart' as const,
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text,
        },
      },
    };
  };

  const {TOTAL, RATE, NEW} = localization(language);

  const chartsConfig = [
    {key: 'total', color: 'rgba(72, 99, 235, 0.7)', title: TOTAL},
    {key: 'rate', color: 'rgba(68, 217, 38, 0.7)', title: RATE},
    {key: 'newbies', color: 'rgba(235, 72, 99, 0.7)', title: NEW},
  ];

  return (
    <Wrapper>
      {chartsConfig.map(({key, color, title}) => (
        <div key={key}>
          <Line
            data={createChartData(
              (document.createElement('canvas') as HTMLCanvasElement).getContext('2d'),
              extractedData[key] as number[],
              color
            )}
            options={createOptions(title)}
          />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 0.5rem));
  grid-column-gap: 1rem;
`;

export default Charts;
