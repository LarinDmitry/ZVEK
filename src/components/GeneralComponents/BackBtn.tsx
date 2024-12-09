import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Arrow from 'assets/icons/arrow.svg';
import {font_body_4_reg} from 'theme/fonts';

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/main')}>
      <Icon>
        <Arrow />
      </Icon>
      Назад
    </Wrapper>
  );
};

const Wrapper = styled(Button)`
  &.MuiButtonBase-root {
    width: 5rem;
    ${font_body_4_reg};
    color: ${({theme}) => theme.colors.gray000};
    background: ${({theme}) => theme.colors.blue100};
    border-radius: 16px;
    text-transform: inherit;

    &:hover {
      background: ${({theme}) => theme.colors.blue100};
    }
  }
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray000};
    transform: rotate(90deg);
  }
`;

export default BackBtn;
