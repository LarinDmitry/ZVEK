import React, {FC, useMemo} from 'react';
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
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin);

interface Props {
  data: {damage: number; date: string; guildTotal?: number}[];
  title: string;
  averageTitle: string;
  average: number;
}

const LineChart: FC<Props> = ({data, title, averageTitle, average}) => {
  const chartData = useMemo(
    () => ({
      labels: data?.map((item) => item.date) || [],
      datasets: [
        {
          label: 'Урон в ЗВЭК',
          data: data?.map((item) => item.damage / 1000000000) || [],
          borderColor: 'rgb(72, 99, 235)',
          backgroundColor: 'rgb(68, 217, 38)',
          fill: false,
          stepped: true,
          tension: 0.4,
        },
      ],
    }),
    [data]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          formatter: (value: number) => value.toFixed(2),
        },
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: title,
        },
        annotation: {
          annotations: average
            ? {
                line1: {
                  type: 'line',
                  yMin: average / 1000000000,
                  yMax: average / 1000000000,
                  borderColor: 'rgb(235, 72, 99)',
                  borderDash: [10],
                  borderWidth: 2,
                },
              }
            : {},
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Дата',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Демаг',
          },
        },
      },
    }),
    [title, average]
  ) as any;

  return (
    <div>
      <Line data={chartData} options={options} />
      <SubInfo>
        {averageTitle} <b>{((average || 0) / 1000000000).toFixed(2)} млд</b>
      </SubInfo>
    </div>
  );
};

const SubInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

export default LineChart;
