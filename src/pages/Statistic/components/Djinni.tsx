import React, {useMemo, ElementType} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {calculateGini} from '../StatisticUtils';
import {latestZveks} from '../../../DATA';

const Djinni = () => {
  const uniqueDates = useMemo(
    () =>
      Array.from(new Set(latestZveks.flatMap(({info}) => info.map(({date}) => date)))).filter(
        (date) => date !== 'xx.xx'
      ),
    []
  );

  const giniValues = useMemo(
    () =>
      uniqueDates.map((date) => ({
        date,
        gini: calculateGini(latestZveks.map(({info}) => info.find((i) => i.date === date)?.damage || 0)),
      })),
    [uniqueDates]
  );

  const headerValues = ['Дата', 'Коэффициент Джинни'];

  return (
    <Container component={Paper}>
      <Table>
        <TableHead>
          <Row>
            {headerValues.map((value) => (
              <TableCell align="center" key={value}>
                <b>{value}</b>
              </TableCell>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {giniValues.map(({date, gini}) => (
            <Row key={date}>
              <TableCell align="center">{date}</TableCell>
              <TableCell align="center">{gini.toFixed(4)}</TableCell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled(TableContainer)<{component: ElementType}>`
  &.MuiPaper-root {
    margin: 0 2rem;
    width: calc(100% - 4rem);
  }
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Djinni;
