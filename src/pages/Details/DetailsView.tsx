import React from 'react';
import {useParams} from 'react-router-dom';
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
import {latestZveks, lastZvek} from 'pages/Main/DATA';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DetailsView = () => {
  const {id} = useParams<{id: string}>();

  const lastZvekValues = lastZvek.data.find(({name}) => name === id)?.damageByDay;
  const latestZvekValues = latestZveks.find(({name}) => name === id)?.damageByDay;

  const chartData = {
    labels: latestZvekValues?.map((item) => item.date) || [],
    datasets: [
      {
        label: 'Демаг за ЗВЭК',
        data: latestZvekValues?.map(item => item.damage / 1000000000) || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Демаг последних 3х ЗВЭК, млд',
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
  };

  console.log(latestZvekValues, 'latestZvekValues');
  console.log(JSON.stringify(lastZvekValues), 'lastZvekValues');

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DetailsView;
