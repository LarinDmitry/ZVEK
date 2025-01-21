import React, {ElementType} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {zeroDamagePlayers} from '../StatisticUtils';

export interface ZeroDamagePlayer {
  name: string;
  zeroDays: number[];
}

const ZeroDamagePlayers = () => {
  const headerValues = ['Игрок', 'День'];

  return (
    <Container component={Paper}>
      <Table>
        <TableHead>
          {zeroDamagePlayers.length > 0 && (
            <Row>
              {headerValues.map((value) => (
                <StyledTableCell key={value}>
                  <b>{value}</b>
                </StyledTableCell>
              ))}
            </Row>
          )}
        </TableHead>
        <TableBody>
          {zeroDamagePlayers.length === 0 ? (
            <AllDamagedRow>
              <StyledTableCell>
                <AllDamagedText>Все игроки нанесли урон во все дни</AllDamagedText>
              </StyledTableCell>
            </AllDamagedRow>
          ) : (
            zeroDamagePlayers.map(({name, zeroDays}, idx) => (
              <Row key={idx}>
                <TableCell align="center">{name}</TableCell>
                <TableCell align="center">
                  <SkippedDay>{zeroDays.map((day) => `${day}й`).join(', ')}</SkippedDay>
                </TableCell>
              </Row>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

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

const StyledTableCell = styled(TableCell)`
  &.MuiTableCell-root {
    font-weight: bold;
    text-align: center;
  }
`;

const AllDamagedRow = styled(TableRow)`
  &.MuiTableCell-root {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const AllDamagedText = styled.span`
  color: ${({theme}) => theme.colors.green100};
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
`;

const SkippedDay = styled.span`
  color: ${({theme}) => theme.colors.red100};
`;

export default ZeroDamagePlayers;
