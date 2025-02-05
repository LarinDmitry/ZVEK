import React, {useState} from 'react';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';
import MuiInput from '@mui/material/Input';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import CustomizedSlider, {bossHP, localization} from './CalculatorUtils';
import {globalLocalization} from 'services/GlobalUtils';
import {font_body_2_bold} from 'theme/fonts';

const CalculatorView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {BILLION} = globalLocalization(language);
  const [bossLevel, setBossLevel] = useState(100);
  const [remainingPercent, setRemainingPercent] = useState(100);

  const handleBossLevelChange = (event: Event, newValue: number | number[]) => {
    setBossLevel(newValue as number);
  };

  const handleRemainingPercentChange = (event: Event, newValue: number | number[]) => {
    setRemainingPercent(newValue as number);
  };

  const handleInputChangePercent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemainingPercent(event.target.value === '' ? 1 : Number(event.target.value));
  };

  const handleInputChangeLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBossLevel(event.target.value === '' ? 1 : Number(event.target.value));
  };

  const remainingHP = (bossHP[bossLevel - 1] * remainingPercent) / 100;

  const {CALCULATOR, BOSS_LEVEL, HP_LEVEL, HP_REMAINING} = localization(language);

  return (
    <Wrapper>
      <BackBtn />
      <Calculator>
        <Title>{CALCULATOR}</Title>

        <p>{BOSS_LEVEL}</p>
        <SliderWrapper>
          <CustomizedSlider value={bossLevel} onChange={handleBossLevelChange} />
          <Input
            value={bossLevel}
            size="small"
            onChange={handleInputChangeLevel}
            inputProps={{
              step: 1,
              max: 100,
              type: 'number',
            }}
          />
        </SliderWrapper>
        <p>{HP_LEVEL}</p>
        <SliderWrapper>
          <CustomizedSlider
            value={typeof remainingPercent === 'number' ? remainingPercent : 0}
            onChange={handleRemainingPercentChange}
          />
          <Input
            value={remainingPercent}
            size="small"
            onChange={handleInputChangePercent}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
            }}
          />
        </SliderWrapper>
        <p>{HP_REMAINING} {remainingHP.toLocaleString()} {BILLION} HP</p>
      </Calculator>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem 1rem 1.5rem;
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Input = styled(MuiInput)`
  width: 42px;
  margin-left: 0;
`;

export default CalculatorView;
