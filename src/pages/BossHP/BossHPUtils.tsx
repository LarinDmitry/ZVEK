import React from 'react';
import en from './localization/EN';
import uk from './localization/UK';
import ru from './localization/RU';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import {LocalizationObjProps} from 'services/GlobalUtils';

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const localization = (language: string) => localizationObj[language];

interface CustomizedSliderProps {
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
  }

export default function CustomizedSlider({ value, onChange }: CustomizedSliderProps) {
  return (
    <Box sx={{ width: 320 }}>
      <BossSlider valueLabelDisplay="auto" value={value} aria-label="pretto slider" defaultValue={100} onChange={onChange}
          max={100} min={1} />
    </Box>
  );
}

export const bossHP = [
    13875000,
    7564400,
    7475200,
    7422200,
    7282600,
    7213900,
    7161700,
    7080300,
    7007800,
    6844700,
    6775700,
    6488000,
    6213900,
    5873300,
    5517200,
    5175400,
    4809300,
    4465800,
    4060000,
    3814000,
    3452500,
    3263400,
    3091700,
    2919900,
    2727100,
    2491900,
    2353400,
    2212500,
    2061100,
    1844400,
    1717600,
    1631700,
    1500400,
    1406000,
    1374100,
    1288200,
    1119900,
    1069400,
    1022900,
    944680,
    836120,
    815860,
    767330,
    729290,
    686130,
    647390,
    601160,
    560250,
    508280,
    472340,
    438930,
    409730,
    386150,
    364990,
    343520,
    322050,
    300580,
    279110,
    257640,
    236170,
    214700,
    203970,
    193230,
    182500,
    171660,
    161030,
    150290,
    139560,
    128820,
    118090,
    107350,
    102580,
    97808,
    93037,
    88266,
    83494,
    78358,
    73952,
    69181,
    64410,
    53675,
    50991,
    48308,
    45624,
    42940,
    40256,
    37573,
    34489,
    33815,
    32205,
    26838,
    26390,
    25943,
    25496,
    25052,
    24601,
    24154,
    24011,
    23259,
    8712,
  ];
  
  const BossSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&::before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
