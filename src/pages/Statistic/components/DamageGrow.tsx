import React, {ElementType} from 'react';
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
import {globalLocalization } from 'services/GlobalUtils';
import {useGuildData} from 'services/GlobalUtils';
import {guildRate, newbies} from '../../../DATA';
import {boldWeight} from 'theme/fonts';

const DamageGrow = () => {
  const {language} = useAppSelector(selectUserConfiguration);

  const guildData = useGuildData();

  const {DATE, DAMAGE_GUILD, CHANGES} = localization(language);
  const {NO_DATA, GUILD_RATING, NEWBIES} = globalLocalization(language);

  const headerValues = [DATE, DAMAGE_GUILD, CHANGES, GUILD_RATING, NEWBIES];

  return (
    <Container component={Paper}>
      <Table>
        <TableHead>
          <Row>
            {headerValues.map((value) => (
              <HCell key={value}>{value}</HCell>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {guildData.map(({guildTotal, percentageChange, date}, idx) => {
            const changeText =
              idx > 0
                ? percentageChange === null
                  ? NO_DATA
                  : `${percentageChange > 0 ? '>' : '<'} ${Math.abs(percentageChange).toFixed(2)}%`
                : '—';

            return (
              <Row key={`guild-${idx}`}>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center">{(guildTotal / 1e12).toFixed(2)}</TableCell>
                <TableCell align="center">
                  <ChangeText value={percentageChange}>{changeText}</ChangeText>
                </TableCell>
                <TableCell align="center">
                  <ChangeText value={guildRate[idx - 1] - guildRate[idx]}>{guildRate[idx]}</ChangeText>
                </TableCell>
                <TableCell align="center">
                  <NewbiesText>{newbies[idx]}</NewbiesText>
                </TableCell>
              </Row>
            );
          })}
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
    grid-template-columns: repeat(5, 1fr);
  }
`;

const HCell = styled(TableCell)`
  &.MuiTableCell-root {
    ${boldWeight};
    text-align: center;
  }
`;

const ChangeText = styled.span<{value: number | null}>`
  color: ${({
    value,
    theme: {
      colors: {red100, green100, gray100},
    },
  }) => {
    if (value === null) return gray100;
    if (value > 0) return green100;
    if (value < 0) return red100;
    return gray100;
  }};
`;

const NewbiesText = styled.span`
  color: ${({theme}) => theme.colors.green100};
`;

export default DamageGrow;
