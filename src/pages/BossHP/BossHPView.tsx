import React, {useState} from 'react';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';
import BossHPSlider from './components/Slider';
import MuiInput from '@mui/material/Input';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {bossHP, localization} from './BossHPUtils';
import {globalLocalization} from 'services/GlobalUtils';
import {font_body_2_bold} from 'theme/fonts';

const BossHPView = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {TRILLION} = globalLocalization(language);
  const {CALCULATOR, BOSS_LEVEL, HP_LEVEL, HP_REMAINING, LEVEL} = localization(language);

  const [bossLevel, setBossLevel] = useState<number>(100);
  const [remainingPercent, setRemainingPercent] = useState<number>(100);

  const remainingHP = (bossHP[bossLevel - 1] * remainingPercent) / 100;

  return (
    <Wrapper>
      <BackBtn />
      <Calculator>
        <Title>{CALCULATOR}</Title>

        <MyWrapper>
          <TextWrapper>{BOSS_LEVEL}</TextWrapper>
          <InputGroup>
            <Input
              value={bossLevel}
              size="small"
              onChange={(e) => setBossLevel(Number(e.target.value))}
              inputProps={{
                step: 1,
                max: 100,
                type: 'number',
              }}
            />
            <TextWrapper>{LEVEL}</TextWrapper>
          </InputGroup>
        </MyWrapper>
        <BossHPSlider value={bossLevel} onChange={setBossLevel} min={1} max={100} />

        <MyWrapper>
          <TextWrapper>{HP_LEVEL}</TextWrapper>
          <InputGroup>
            <Input
              value={remainingPercent}
              size="small"
              onChange={(e) => setRemainingPercent(Number(e.target.value))}
              inputProps={{
                step: 1,
                max: 100,
                type: 'number',
              }}
            />
            <TextWrapper>%</TextWrapper>
          </InputGroup>
        </MyWrapper>
        <BossHPSlider value={remainingPercent} onChange={setRemainingPercent} min={0} max={100} />

        <TextWrapper>
          {HP_REMAINING} {remainingHP} / {bossHP[bossLevel - 1]} {TRILLION} HP
        </TextWrapper>

        <MyWrapper></MyWrapper>
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

const MyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 360px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const Input = styled(MuiInput)`
  width: 44px;
  font-size: 0.85rem;
  justify-content: flex-end;
  padding: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default BossHPView;
