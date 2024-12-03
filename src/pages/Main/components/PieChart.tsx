import React, {FC} from 'react';
import styled from 'styled-components';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {backgroundColor, hoverBackgroundColor} from 'pages/Main/MainUtils';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  total: number;
  data: {
    name: string;
    damage: number;
  }[];
}

const PieChart: FC<Props> = ({data, total}) => {
  const chartData = {
    labels: data.map(({name}) => name),
    datasets: [
      {
        label: 'Damage',
        data: data.map(({damage}) => damage),
        backgroundColor,
        hoverBackgroundColor,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: false,
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
  } as any;

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
