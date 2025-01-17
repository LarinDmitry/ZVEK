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

interface PlayerData {
  name: string;
  damageLastZvek: number;
  damagePreviousZvek: number; //before last
  percentageChange: number | null;
}

const DamageDecrease = () => {
  const playerData: PlayerData[] = useMemo(() => {
    return latestZveks
      .map(({ name, info }) => {
        const lastEventInfo = info[info.length - 1];
        const previousEventInfo = info[info.length - 2] || { damage: 0 };

        const damageLastZvek = lastEventInfo.damage;
        const damagePreviousZvek = previousEventInfo.damage;
        const percentageChange =
          damagePreviousZvek > 0
            ? ((damageLastZvek - damagePreviousZvek) / damagePreviousZvek) * 100
            : null;
        return { name, damageLastZvek, damagePreviousZvek, percentageChange };
      })
      .filter(({ percentageChange }) => percentageChange !== null && percentageChange < 0);
  }, []);

  const headerValues = ['Никнейм', 'Урон прошлого ЗВЭК (млрд)', 'Урон последнего ЗВЭК (млрд)', 'Уменьшился на'];

  const allPlayersDamageGrow = playerData.length === 0;

  return (
    <Container component={Paper}>
      <Table>
        <TableHead>
          { !allPlayersDamageGrow && (
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
          {!allPlayersDamageGrow ? (
            playerData.map(({ name, damagePreviousZvek, damageLastZvek, percentageChange }, idx) => {
              const changeText = `уменьшился на ${Math.abs(percentageChange!).toFixed(2)}%`;

              return (
                <Row key={`player-${idx}`}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{(damagePreviousZvek / 1e9).toFixed(2)}</TableCell>
                  <TableCell align="center">{(damageLastZvek / 1e9).toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <ChangeText value={percentageChange}>{changeText}</ChangeText>
                  </TableCell>
                </Row>
              );
            })
          ) : (
            <NoDataRow>
              <TableCell align="center" colSpan={4}>
                <NoDataText>У всех игроков урон вырос</NoDataText>
              </TableCell>
            </NoDataRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

const Container = styled(TableContainer)<{ component: ElementType }>`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ChangeText = styled.span<{ value: number | null }>`
  color: ${({
    value,
    theme: {
      colors: { red100, green100, gray100 },
    },
  }) => {
    if (value === null) return gray100;
    if (value > 0) return green100;
    if (value < 0) return red100;
    return gray100;
  }};
`;

const NoDataRow = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoDataText = styled.span`
  color: ${({ theme: { colors } }) => colors.green100};
  font-weight: bold;
  font-size: 1.2rem;
`;

export default DamageDecrease;
