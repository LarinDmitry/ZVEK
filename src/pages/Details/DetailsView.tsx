import React, {useMemo} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import {zvekDaysOptions} from 'pages/Main/MainUtils';
import {latestZveks} from 'pages/Main/DATA';
import Arrow from 'assets/icons/arrow.svg';

const DetailsView = () => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

  const latestZvekValues = useMemo(() => latestZveks.find(({name}) => name === id)?.info || [], [id]);

  const damageByDayData = useMemo(() => {
    const {damageByDay = [], date} = latestZvekValues.slice(-1)[0] || {};
    return damageByDay.map((damage, idx) => ({
      damage,
      date: zvekDaysOptions[idx] || date,
    }));
  }, [latestZvekValues]);

  const averageAllZveks = useMemo(
    () => latestZvekValues.reduce((acc, {damage}) => acc + damage, 0) / 3 || 0,
    [latestZvekValues]
  );

  const averageLatestZveks = useMemo(() => {
    const {guildTotal = 0} = latestZvekValues.slice(-1)[0] || {};
    return guildTotal / 30;
  }, [latestZvekValues]);

  const latestDamageByDayValues = latestZvekValues.map(({damageByDay, date}) => ({damageByDay, date}));

  return (
    <div>
      <Button onClick={() => navigate('/')}>
        <Icon>
          <Arrow />
        </Icon>
      </Button>
      {!latestZvekValues || damageByDayData.length === 0 ? (
        <div>Нет данных для отображения</div>
      ) : (
        <>
          <Charts>
            <LineChart
              data={latestZvekValues}
              title="Урон последних 3х ЗВЭК, млд"
              average={averageAllZveks || 0}
              averageTitle="Ваш средний урон последних трех звэков:"
              stepped
            />
            <LineChart
              data={damageByDayData}
              title="Урон последнего ЗВЭК, млд"
              average={averageLatestZveks}
              averageTitle="Средний урон последнего звэка по гильдии:"
            />
          </Charts>
          <BarChartContainer>
            <BarChart data={latestDamageByDayValues} title="Сравнение урона по дням, млд" />
          </BarChartContainer>
        </>
      )}
    </div>
  );
};

const Charts = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-template-rows: 20rem;
  grid-column-gap: 1rem;
  padding: 0 4rem;
`;

const BarChartContainer = styled.div`
  margin-top: 1rem;
  height: calc(100vh - 23.5rem);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

export default DetailsView;
