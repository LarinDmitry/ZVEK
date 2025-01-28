import React, {useMemo, ElementType} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {PlugCellStyles} from 'services/GlobalStyled';
import {headerValues} from '../StatisticUtils';
import {latestZveks} from '../../../DATA';
import {font_header_6_bold} from 'theme/fonts';

interface PlayerData {
  name: string;
  damageLastZvek: number;
  damagePreviousZvek: number; //before last
  percentageChange: number | null;
}

const DamageDecrease = () => {
  const playerData: PlayerData[] = useMemo(
    () =>
      latestZveks.reduce<PlayerData[]>((acc, {name, info}) => {
        const lastTwoZveks = info.slice(-2);
        if (lastTwoZveks.length < 2) return acc;

        const [previousZvek, lastZvek] = lastTwoZveks;
        const percentageChange = ((lastZvek.damage - previousZvek.damage) / previousZvek.damage) * 100;

        percentageChange < 0 &&
          acc.push({
            name,
            damageLastZvek: lastZvek.damage,
            damagePreviousZvek: previousZvek.damage,
            percentageChange,
          });

        return acc;
      }, []),
    []
  );

  const allPlayersDamageGrow = playerData.length === 0;

  return (
    <Container component={Paper}>
      {!allPlayersDamageGrow ? (
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
            {playerData.map(({name, damagePreviousZvek, damageLastZvek, percentageChange}, idx) => {
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
            })}
          </TableBody>
        </Table>
      ) : (
        <Plug>У всех игроков урон вырос</Plug>
      )}
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
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ChangeText = styled.span<{value: number | null}>`
  color: ${({
    value,
    theme: {
      colors: {red100, green100, gray100},
    },
  }) => {
    if (value === null || value === 0) return gray100;
    return value > 0 ? green100 : red100;
    return gray100;
  }};
`;

const Plug = styled.div`
  ${PlugCellStyles};
  color: ${({theme}) => theme.colors.green100};
  text-align: center;
  ${font_header_6_bold}
`;

export default DamageDecrease;
