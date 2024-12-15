import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import {zvekDaysOptions} from 'pages/Main/MainUtils';
import {latestZveks} from '../../DATA';
import {font_body_2_reg, font_header_6_reg} from 'theme/fonts';

const DetailsView = () => {
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
    <Wrapper>
      <Header>
        <BackBtn />
        <NickName>
          ЗВЭК статистика игрока <b>{id}</b>
        </NickName>
      </Header>
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
              withCheckbox={false}
            />
            <LineChart
              data={damageByDayData}
              title="Урон последнего ЗВЭК, млд"
              average={averageLatestZveks}
              averageTitle="Средний урон последнего звэка по гильдии:"
              stepped={false}
              withCheckbox
            />
          </Charts>
          <BarChartContainer>
            <BarChart data={latestDamageByDayValues} title="Сравнение урона по дням, млд" />
          </BarChartContainer>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
`;

const Header = styled.span`
  display: flex;
  align-items: center;
`;

const NickName = styled.span`
  ${font_header_6_reg};
  margin-left: 1rem;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    ${font_body_2_reg};
  }
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-template-rows: 20rem;
  grid-column-gap: 1rem;
  padding: 0 4rem;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    grid-template-columns: 100%;
    grid-template-rows: inherit;
    padding: 0;
  }
`;

const BarChartContainer = styled.div`
  margin-top: 1rem;
  height: calc(100vh - 24.5rem);
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    height: fit-content;
  }
`;

export default DetailsView;
