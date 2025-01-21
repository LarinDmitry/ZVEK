import React from 'react';
import styled from 'styled-components';
import en from './GlobalLocalization/EN';
import uk from './GlobalLocalization/UK';
import ru from './GlobalLocalization/RU';
import SvgIcon from '@mui/material/SvgIcon';
import UK from 'assets/icons/language_uk.svg';
import EN from 'assets/icons/language_en.svg';
import RU from 'assets/icons/language_ru.svg';

export interface LocalizationObjProps {
  [key: string]: {
    [key: string]: string;
  };
}

export const stateReducer = (state: any, action: any) => ({...state, ...action});

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const globalLocalization = (language: string) => localizationObj[language];

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    font-size: 2rem;
    cursor: pointer;
    fill: ${({theme}) => theme.colors.blue100};
  }
`;

export const languageOptions = [
  {
    label: 'English',
    value: 'en',
    img: (
      <Icon>
        <EN />
      </Icon>
    ),
  },
  {
    label: 'Українська',
    value: 'uk',
    img: (
      <Icon>
        <UK />
      </Icon>
    ),
  },
  {
    label: 'Русский',
    value: 'ru',
    img: (
      <Icon>
        <RU />
      </Icon>
    ),
  },
];
