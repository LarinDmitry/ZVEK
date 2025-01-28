import React, {useMemo, ElementType} from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {localization} from '../StatisticUtils';
import {latestZveks} from '../../../DATA';

interface TopPlayerData {
  date: string;
  topPlayers: string[];
  topDamagePercentage: number;
}

const calculateTopPlayersData = (): TopPlayerData[] =>
  latestZveks[0].info
    .map(({date, guildTotal}, index) => {
      if (guildTotal === 0) return null;

      const topPlayers = latestZveks
        .map(({info, name}) => ({
          name,
          damage: info[index] ? info[index].damage : 0,
        }))
        .sort((a, b) => b.damage - a.damage)
        .slice(0, 3);
      const topDamageSum = topPlayers.reduce((sum, {damage}) => sum + damage, 0);
      const topDamagePercentage = (topDamageSum / guildTotal) * 100;

      return {
        date,
        topPlayers: topPlayers.map(({name}) => name),
        topDamagePercentage,
      };
    })
    .filter((item) => item !== null);

const TopPlayers = () => {
  const topPlayersData: TopPlayerData[] = useMemo(() => calculateTopPlayersData(), []);
  
  const {language} = useAppSelector(selectUserConfiguration);
  const {DATE, TOP, PERCENT} = localization(language);
  
  const headerValues = [DATE, TOP, PERCENT];

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
          {topPlayersData.map(({date, topPlayers, topDamagePercentage}, idx) => (
            <Row key={idx}>
              <TableCell align="center">{date}</TableCell>
              <TableCell align="center">{topPlayers.join(', ')}</TableCell>
              <TableCell align="center">{topDamagePercentage.toFixed(2)}%</TableCell>
            </Row>
          ))}
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
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TopPlayers;
