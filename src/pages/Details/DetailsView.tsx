import React, {useMemo} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import {zvekDaysOptions} from 'pages/Main/MainUtils';
import {latestZveks, lastZvek} from 'pages/Main/DATA';
import LineChart from 'pages/Details/components/LineChart';
import Arrow from 'assets/icons/arrow.svg';

const DetailsView = () => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

  const latestZvekValues = useMemo(() => latestZveks.find(({name}) => name === id)?.damageByDay, [id]);

  const lastZvekValues = useMemo(
    () =>
      lastZvek.data
        .find(({name}) => name === id)
        ?.damageByDay.map((damage, idx) => ({
          damage,
          date: zvekDaysOptions[idx],
        })),
    [id]
  );

  const averageLastZvek = useMemo(() => lastZvek.total / 30, []);

  const averageLatestZveks = useMemo(
    () => latestZvekValues && latestZvekValues?.reduce((acc, {damage}) => acc + damage, 0) / latestZvekValues?.length,
    [latestZvekValues]
  );

  return (
    <div>
      <Button>
        <Icon onClick={() => navigate('/')}>
          <Arrow />
        </Icon>
      </Button>
      {!latestZvekValues || !lastZvekValues ? (
        <div>Нет данных для отображения</div>
      ) : (
        <Charts>
          <LineChart
            data={latestZvekValues || []}
            title="Демаг последних 3х ЗВЭК, млд"
            average={averageLatestZveks || 0}
            averageTitle="Ваш средний урон последних трех звэков:"
          />
          <LineChart
            data={lastZvekValues || []}
            title="Демаг последнего ЗВЭК, млд"
            average={averageLastZvek}
            averageTitle="Средний урон последнего звэка по гильдии:"
          />
        </Charts>
      )}
    </div>
  );
};

const Charts = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-column-gap: 1rem;
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

export default DetailsView;
