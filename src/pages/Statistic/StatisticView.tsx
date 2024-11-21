import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import DamageGrow from './components/DamageGrow';
import TopPlayers from './components/TopPlayers';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import {latestZveks} from '../../DATA';
import Arrow from 'assets/icons/arrow.svg';
import {font_body_2_bold} from 'theme/fonts';

// Соотношение качества героя к урону (формуляр)
// Коэффициент дисбаланса, насколько равномерно распределен урон между игроками по Коэффициент Джини (формуляр)
// Игроки, чей урон снижается от ивента к ивенту?
// Метрика "усилие" (формуляр, но там надо подсчитать коэффициенты)
// Средний прогнозируемый урон на основе предыдущих ивентов (формуляр)

const StatisticView = () => {
  const navigate = useNavigate();
  console.log(latestZveks, 'latestZveks');

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>
        <Icon>
          <Arrow />
        </Icon>
      </Button>

      <Title>Звэк движение:</Title>
      <DamageGrow />

      <Title>Топ игроки последних Звэк:</Title>
      <TopPlayers />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem 0 1rem 2rem;
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

export default StatisticView;
