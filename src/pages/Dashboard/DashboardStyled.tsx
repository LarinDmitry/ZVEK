import {css} from 'styled-components';

export const BlockStyles = css`
  background: ${({theme}) => theme.colors.gray000};
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;