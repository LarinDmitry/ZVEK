import React from 'react';
import styled from 'styled-components';
import squidIcon from 'src/assets/icons/squid.svg';

interface BossHPSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const BossHPSlider: React.FC<BossHPSliderProps> = ({value, onChange, min = 0, max = 100}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleIncrement = () => {
    onChange(value < max ? value + 1 : max);
  };

  const handleDecrement = () => {
    onChange(value > min ? value - 1 : min);
  };

  return (
    <SliderContainer>
      <MyButton onClick={handleDecrement}>
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor" />
        </svg>
      </MyButton>
      <StyledInput
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        $progress={((value - min) / (max - min)) * 100}
      />
      <MyButton onClick={handleIncrement}>
        <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 11L6 4L10.5 7.5L6 11Z" fill="currentColor" />
        </svg>
      </MyButton>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 360px;
  margin: 20px 0;
  text-align: center;
  padding: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled.input.attrs({type: 'range'})<{$progress: number}>`
  width: 280px;
  appearance: none;
  height: 20px;
  border: 1.5px solid rgba(72, 99, 235, 0.9);
  border-radius: 10px;
  outline: none;
  padding: 0;
  box-shadow: 0px 0px 0px 5px rgba(72, 99, 235, 0.1);

  background: linear-gradient(
    to right,
    rgba(72, 99, 235, 0.85) 0%,
    rgba(72, 99, 235, 0.85) ${({$progress}) => $progress}%,
    rgba(72, 99, 235, 0.3) ${({$progress}) => $progress}%,
    rgba(72, 99, 235, 0.3) 100%
  );

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(182, 193, 252);
    border: 1.5px solid rgba(72, 99, 235, 0.9);
    cursor: pointer;
    background-image: url(${squidIcon});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(182, 193, 252);
    border: 1.5px solid rgba(72, 99, 235, 0.9);
    cursor: pointer;
    background-image: url(${squidIcon});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgb(182, 193, 252);
    border: 1.5px solid rgba(72, 99, 235, 0.9);
    cursor: pointer;
    background-image: url(${squidIcon});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const MyButton = styled.button`
  color: #000;
  height: 24px;
  width: 24px;
  padding: 0;
  margin: 0px;
  border-radius: 50%;
  border: 1.5px solid rgba(72, 99, 235, 0.9);
  background-color: rgb(182, 193, 252);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default BossHPSlider;
