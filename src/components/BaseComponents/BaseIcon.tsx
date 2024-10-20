import React, {ChangeEvent, FC, ReactNode} from 'react';
import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';

interface Props {
  icon: ReactNode;
  fill?: string;
  boxW?: number | string;
  boxH?: number | string;
  onClick?: (e: ChangeEvent<unknown>) => void;
}

const BaseIcon: FC<Props> = ({icon, onClick, fill = '#000', boxW = 24, boxH = 24, ...other}) => (
  <Wrapper fill={fill} viewBox={`0 0 ${boxW} ${boxH}`} onClick={onClick} {...other}>
    {icon}
  </Wrapper>
);

const Wrapper = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    fill: ${({fill}) => fill};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default BaseIcon;
