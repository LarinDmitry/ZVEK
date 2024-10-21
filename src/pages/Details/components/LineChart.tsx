import React, {FC, useMemo} from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
  data: {damage: number; date: string; guildTotal: number}[];
  title: string;
}

const LineChart: FC<Props> = ({data, title}) => {
  const chartData = useMemo(
    () => ({
      labels: data?.map((item) => item.date) || [],
      datasets: [
        {
          label: 'Демаг за ЗВЭК',
          data: data?.map((item) => item.damage / 1000000000) || [],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: title,
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
    [title]
  );

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
