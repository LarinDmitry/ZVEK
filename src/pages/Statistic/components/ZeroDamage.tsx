import React, { useMemo, ElementType } from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { latestZveks } from '../../../DATA';

interface ZeroDamagePlayer {
  name: string;
  zeroDays: number[];
}

const calculateZeroDamagePlayers = (): ZeroDamagePlayer[] => {
  return latestZveks
    .map(({ name, info }) => {
      const lastEvent = info[info.length - 1];
      const zeroDays = lastEvent.damageByDay
        .map((damage, dayIndex) => (damage === 0 ? dayIndex + 1 : null))
        .filter((day) => day !== null);

      return zeroDays.length > 0
        ? {
            name,
            zeroDays,
          }
        : null;
    })
    .filter((player) => player !== null) as ZeroDamagePlayer[];
};

const ZeroDamagePlayers = () => {
    const zeroDamagePlayers: ZeroDamagePlayer[] = useMemo(() => calculateZeroDamagePlayers(), []);
    const headerValues = ['Игрок', 'День'];

    const allPlayersDamaged = zeroDamagePlayers.length === 0;
  
    return (
      <Container component={Paper}>
        <Table>
          <TableHead>
            {!allPlayersDamaged && (
              <Row>
                {headerValues.map((value) => (
                  <TableCell align="center" key={value}>
                    <b>{value}</b>
                  </TableCell>
                ))}
              </Row>
            )}
          </TableHead>
          <TableBody>
            {allPlayersDamaged ? (
              <AllDamagedRow>
                <TableCell align="center" colSpan={headerValues.length}>
                  <AllDamagedText>Все игроки нанесли урон во все дни</AllDamagedText>
                </TableCell>
              </AllDamagedRow>
            ) : (
              zeroDamagePlayers.map(({ name, zeroDays }, idx) => (
                <Row key={idx}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center"><SkippedDay>{zeroDays.map((day) => `${day}й`).join(', ')}</SkippedDay></TableCell>
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

const AllDamagedRow = styled(TableRow)`
  &.MuiTableCell-root {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AllDamagedText = styled.span`
  color: ${({ theme }) => theme.colors.green100};
  font-weight: bold;
`;

const SkippedDay = styled.span`
  color: ${({ theme }) => theme.colors.red100};
`;

export default ZeroDamagePlayers;
