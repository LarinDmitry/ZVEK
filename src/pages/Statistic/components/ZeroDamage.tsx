import React, {ElementType} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {PlugCellStyles} from 'services/GlobalStyled';
import {zeroDamagePlayers, zeroHeaderValues} from '../StatisticUtils';
import {boldWeight} from 'theme/fonts';

export interface ZeroDamagePlayer {
  name: string;
  zeroDays: number[];
}

const ZeroDamagePlayers = () => (
  <Container component={Paper}>
    {!zeroDamagePlayers().length ? (
      <Plug>Все игроки нанесли урон во все дни</Plug>
    ) : (
      <Table>
        <TableHead>
          <Row>
            {zeroHeaderValues.map((value) => (
              <HCell key={value}>{value}</HCell>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {zeroDamagePlayers().map(({name, zeroDays}) => (
            <Row key={name}>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">
                <Skipped>{zeroDays.map((day) => `${day}й`).join(', ')}</Skipped>
              </TableCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    )}
  </Container>
);

const Container = styled(TableContainer)<{component: ElementType}>`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HCell = styled(TableCell)`
  &.MuiTableCell-root {
    ${boldWeight};
    text-align: center;
  }
`;

const Plug = styled.div`
  ${PlugCellStyles};
  color: ${({theme}) => theme.colors.green100};
  text-align: center;
`;

const Skipped = styled.div`
  color: ${({theme}) => theme.colors.red100};
`;

export default ZeroDamagePlayers;
