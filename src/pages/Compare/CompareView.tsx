import React, {useCallback, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BackBtn from 'components/GeneralComponents/BackBtn';
import {backgroundColor, hoverBackgroundColor} from 'pages/Main/MainUtils';
import {DamageByDayProps, TransformedDataItemProps} from 'pages/Compare/CompareUtils';
import {latestZveks} from '../../DATA';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const CompareView = () => {
  const {id} = useParams<{id: string}>();

  const damageData = useMemo(() => {
    if (!id) return null;

    return id.split('^').map((item) => {
      const entry = latestZveks.find(({name}) => name === item);
      return {name: entry?.name, damageByDay: entry?.info};
    });
  }, [id]);

  const transformedData: TransformedDataItemProps[] = useMemo(() => {
    if (!damageData) return [];

    return damageData.reduce((acc: TransformedDataItemProps[], {damageByDay}, index) => {
      damageByDay?.forEach(({date, damage}: DamageByDayProps) => {
        const existingDate = acc.find((item) => item.date === date);
        if (existingDate) {
          existingDate[`data${index + 1}`] = damage;
        } else {
          acc.push({date, [`data${index + 1}`]: damage});
        }
      });
      return acc;
    }, []);
  }, [damageData]);

  const maxValuesByDate = useMemo(
    () =>
      transformedData.map((dataItem) => {
        const values = Object.keys(dataItem)
          .filter((key) => key !== 'date')
          .map((key) => dataItem[key] as number);
        return Math.max(...values);
      }),
    [transformedData]
  );

  const data = useMemo(
    () => ({
      labels: transformedData.map(({date}) => date),
      datasets: damageData
        ? damageData.map((item, index) => ({
            label: item.name || `Data ${index + 1}`,
            data: transformedData.map((dataItem) => (dataItem[`data${index + 1}`] as number) / 1000000000 || 0),
            backgroundColor: backgroundColor[index % backgroundColor.length],
            hoverBackgroundColor: hoverBackgroundColor[index % hoverBackgroundColor.length],
            borderWidth: 1,
            borderRadius: 4,
          }))
        : [],
    }),
    [damageData, transformedData]
  );

  const getOptions = useCallback(
    (text: string) => ({
      responsive: true,
      scales: {
        x: {stacked: false},
        y: {stacked: false},
      },
      plugins: {
        legend: {position: 'top'},
        title: {display: true, text},
        datalabels: {
          display: true,
          color: 'rgb(0, 0, 0)',
          align: 'end',
          anchor: 'end',
          formatter: (value: number, context: any) => {
            const dateIndex = context.dataIndex;
            const maxValue = maxValuesByDate[dateIndex];

            if (maxValue) {
              const percentage = ((value * 1000000000) / maxValue) * 100;
              return `${percentage.toFixed(1)}%`;
            }

            return '';
          },
        },
      },
    }),
    [maxValuesByDate]
  ) as any;

  return (
    <Wrapper>
      <BackBtn />
      <Charts>
        <div>
          <Bar options={getOptions('Сравнение урона последних трех ЗВЭК, млд')} data={data} />
        </div>
        <div>
          <Bar options={getOptions('Сравнение урона последнего ЗВЭК, млд  (в работе)')} data={data} />
        </div>
      </Charts>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-column-gap: 1rem;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    grid-template-columns: 100%;
    grid-template-rows: inherit;
  }
`;

export default CompareView;
