import React, {Fragment, useMemo} from 'react';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';
import DamageGrow from './components/DamageGrow';
import TopPlayers from './components/TopPlayers';
import Djinni from './components/Djinni';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from './StatisticUtils';
import Info from 'assets/icons/hint.svg';
import {font_body_2_bold} from 'theme/fonts';

const StatisticView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {ZVEKCH, TOPPLAYERS, DISBALCOEF, EQ, WHERE, AM, PLAYERDAM, AVDAM, AVAR, EVENLY, UNEQ, VERYUNEQ} =
    localization(language);

  const arrValues = useMemo(
    () => [
      {title: `${ZVEKCH}`, value: <DamageGrow />},
      {title: `${TOPPLAYERS}`, value: <TopPlayers />},
      {
        title: (
          <Fragment>
            {DISBALCOEF}
            <Tooltip
              title={
                <List>
                  <li>
                    {EQ}
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
                        2n<sup>2</sup>μ, {WHERE}:
                      </span>
                    </Formula>
                    <List>
                      <li>
                        <b>n</b> {AM}
                      </li>
                      <li>
                        <b>
                          x<sub>i</sub>
                        </b>
                        {PLAYERDAM} <i>i</i>.
                      </li>
                      <li>
                        <b>μ</b> {AVDAM} (<i>{AVAR}</i>).
                      </li>
                    </List>
                    <li>{EVENLY}</li>
                    <li>{UNEQ}</li>
                    <li>{VERYUNEQ}</li>
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
    [ZVEKCH, TOPPLAYERS, DISBALCOEF, EQ, WHERE, AM, PLAYERDAM, AVDAM, AVAR, EVENLY, UNEQ, VERYUNEQ]
  );

  return (
    <Wrapper>
      <BackBtn />
      {arrValues.map(({title, value}, idx) => (
        <Fragment key={idx}>
          <Title>{title}</Title>
          {value}
        </Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1rem 1.5rem;
`;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem;
  display: flex;
  align-items: center;
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
    fill: ${({theme}) => theme.colors.blue090};
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
