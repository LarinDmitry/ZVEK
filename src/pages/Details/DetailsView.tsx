import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {zvekDaysOptions} from 'pages/Main/MainUtils';
import {latestZveks, lastZvek} from 'pages/Main/DATA';
import LineChart from 'pages/Details/components/LineChart';

const DetailsView = () => {
  const {id} = useParams<{id: string}>();

  const latestZvekValues = useMemo(() => latestZveks.find(({name}) => name === id)?.damageByDay, [id]);

  const lastZvekValues = useMemo(
    () =>
      lastZvek.data
        .find(({name}) => name === id)
        ?.damageByDay.map((damage, idx) => ({
          damage,
          date: zvekDaysOptions[idx],
          guildTotal: 0,
        })),
    [id]
  );

  return (
    <Wrapper>
      <LineChart data={latestZvekValues || []} title='Демаг последних 3х ЗВЭК, млд' />
      <LineChart data={lastZvekValues || []} title='Демаг последнего ЗВЭК, млд' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-column-gap: 1rem;
`;

export default DetailsView;
