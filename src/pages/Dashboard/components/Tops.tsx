import React from 'react';
import styled from 'styled-components';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {calculateTopPlayersData} from 'services/GlobalUtils';
import {localization} from '../DashboardUtils';

Chart.register(ArcElement, Tooltip, Legend);

const Tops = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {TOP_PLAYERS, OTHERS} = localization(language);

  const total = calculateTopPlayersData(5)[2].guildTotal;
  const top5Percentage = calculateTopPlayersData(5)[2].topDamagePercentage;
  const other = (100 - top5Percentage) * total;
  const top5 = top5Percentage * total;

  const data = {
    labels: [TOP_PLAYERS, OTHERS],
    datasets: [
      {
        data: [top5, other],
        backgroundColor: ['rgb(245, 200, 86)', 'rgb(54, 162, 23)'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <TopsDiv>
      <TopsTiles>
        <Doughnut data={data} redraw />
      </TopsTiles>
      <TopsTiles>Tops</TopsTiles>
    </TopsDiv>
  );
};

export default Tops;

const TopsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-template-columns: 30% 68%;
`;

const TopsTiles = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin: 1rem;
  height: 88%;
  background: #fff;
`;
