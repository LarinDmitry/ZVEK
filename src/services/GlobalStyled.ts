import styled, {css} from 'styled-components';
import {FormHelperText} from '@mui/material';
import {font_body_4_reg} from 'theme/fonts';

export const helperText = css`
  ${font_body_4_reg};
  color: ${({theme}) => theme.colors.dark080};
  margin: 0.5rem 1rem 0;

  &.Mui-error {
    color: ${({theme}) => theme.colors.error100};
  }
`;

export const HelperTextStyled = styled(FormHelperText)`
  &.MuiFormHelperText-root {
    ${helperText};
  }
`;
