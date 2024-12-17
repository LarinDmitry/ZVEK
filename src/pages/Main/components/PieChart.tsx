import React, {FC, useMemo} from 'react';
import styled from 'styled-components';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {backgroundColor, hoverBackgroundColor} from 'pages/Main/MainUtils';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  total: number;
  data: {
    name: string;
    damage: number;
  }[];
}

const PieChart: FC<Props> = ({data, total}) => {
  const sortedData = useMemo(() => [...data].sort((a, b) => b.damage - a.damage), [data]);

  const chartData = useMemo(
    () => ({
      labels: sortedData.map(({name}) => name),
      datasets: [
        {
          label: 'Урон',
          data: sortedData.map(({damage}) => damage),
          backgroundColor,
          hoverBackgroundColor,
        },
      ],
    }),
    [sortedData]
  );

  const options = useMemo(
    () => ({
      plugins: {
        datalabels: false,
        title: {
          display: true,
          text: 'Диаграмма влияния, %',
        },
        tooltip: {
          callbacks: {
            label: ({label, raw}: any) => `${label}: ${raw.toLocaleString()} (${((raw / total) * 100).toFixed(3)}%)`,
          },
        },
        legend: {
          display: true,
          position: 'bottom' as const,
        },
      },
    }),
    [total]
  ) as any;

  return (
    <Wrapper>
      <Pie data={chartData} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export default PieChart;
