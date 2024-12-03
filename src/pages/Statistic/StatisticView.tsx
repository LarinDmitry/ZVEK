import React, {Fragment, useMemo} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import DamageGrow from './components/DamageGrow';
import TopPlayers from './components/TopPlayers';
import Djinni from './components/Djinni';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Arrow from 'assets/icons/arrow.svg';
import Info from 'assets/icons/hint.svg';
import {font_body_2_bold} from 'theme/fonts';

// Игроки, чей урон снижается от ивента к ивенту?

const StatisticView = () => {
  const navigate = useNavigate();

  const arrValues = useMemo(
    () => [
      {title: 'Звэк движение', value: <DamageGrow />},
      {title: 'Топ игроки последних Звэк', value: <TopPlayers />},
      {
        title: (
          <Fragment>
            Коэффициент дисбаланса
            <Tooltip
              title={
                <List>
                  <li>
                    Формула:
                    <Formula>
                      G=
                      <span>
                        <div>
                          Σ<sub>i=1</sub>
                          <sup className="top-el">n</sup>
                        </div>
                        <div>
                          Σ<sub>j=1</sub>
                          <sup className="top-el">n</sup>|x<sub>i</sub> - x<sub>j</sub>|
                        </div>
                      </span>
                      /
                      <span>
                        2n<sup>2</sup>μ, где:
                      </span>
                    </Formula>
                    <List>
                      <li>
                        <b>n</b> — количество игроков.
                      </li>
                      <li>
                        <b>
                          x<sub>i</sub>
                        </b>
                        — урон игрока <i>i</i>.
                      </li>
                      <li>
                        <b>μ</b> — средний урон (<i>среднее арифметическое</i>).
                      </li>
                    </List>
                    <li>0.2−0.3: Урон распределён довольно равномерно.</li>
                    <li>
                      0.5: Умеренное неравенство. Есть несколько игроков с заметно большим вкладом, но остальные тоже
                      вносят ощутимый вклад.
                    </li>
                    <li>
                      0.8−1.0: Сильное неравенство. Урон в основном сосредоточен у одной или нескольких "топовых"
                      игроков, остальные почти не влияют на общий результат.
                    </li>
                  </li>
                </List>
              }
            >
              <Hint>
                <Info />
              </Hint>
            </Tooltip>
          </Fragment>
        ),
        value: <Djinni />,
      },
    ],
    []
  );

  return (
    <Fragment>
      <Button onClick={() => navigate('/')}>
        <Icon>
          <Arrow />
        </Icon>
      </Button>
      {arrValues.map(({title, value}, idx) => (
        <Fragment key={idx}>
          <Title>{title}</Title>
          {value}
        </Fragment>
      ))}
    </Fragment>
  );
};

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem 0 1rem 2rem;
  display: flex;
  align-items: center;
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

const List = styled.ul`
  padding: 0 0 0 1rem;

  & + li {
    margin: 0.5rem 0;
  }
`;

const Hint = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    height: 1rem;
    width: 1rem;
    margin-left: 0.5rem;
    animation: pulse 5s infinite;
  }
`;

const Formula = styled.div`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    margin: 0.2rem 0;
    display: flex;

    .top-el {
      position: relative;
      right: 14px;
    }
  }
`;

export default StatisticView;
