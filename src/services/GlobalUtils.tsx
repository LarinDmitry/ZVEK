import React, {useMemo} from 'react';
import styled from 'styled-components';
import en from './GlobalLocalization/EN';
import uk from './GlobalLocalization/UK';
import ru from './GlobalLocalization/RU';
import SvgIcon from '@mui/material/SvgIcon';
import {guildStatistic} from 'src/DATA';
import UK from 'assets/icons/language_uk.svg';
import EN from 'assets/icons/language_en.svg';
import RU from 'assets/icons/language_ru.svg';

export interface LocalizationObjProps {
  [key: string]: {
    [key: string]: string;
  };
}

export interface GuildData {
  guildTotal: number;
  percentageChange: number | null;
  date: string;
}

export const stateReducer = (state: any, action: any) => ({...state, ...action});

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const globalLocalization = (language: string) => localizationObj[language];

export const useGuildData = () => {
  return useMemo(() => {
    return guildStatistic.map(({ total, rate, date }, index, arr) => {
      const previous = arr[index - 1]?.total || 0;
      const percentageChange = index > 0 && previous > 0 ? ((total - previous) / previous) * 100 : null;
      return { total, percentageChange, rate, date };
    });
  }, []);
};

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
