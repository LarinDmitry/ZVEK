import React, {useMemo, ElementType} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {latestZveks} from '../../DATA';
import Arrow from 'assets/icons/arrow.svg';
import {font_body_2_bold} from 'theme/fonts';

interface GuildData {
  guildTotal: number;
  percentageChange: number | null;
  date: string;
}

const StatisticView = () => {
  const navigate = useNavigate();

  const guildData: GuildData[] = useMemo(
    () =>
      latestZveks[0].info.map(({guildTotal, date}, index, arr) => {
        const previous = arr[index - 1]?.guildTotal || 0;
        const percentageChange = index > 0 && previous > 0 ? ((guildTotal - previous) / previous) * 100 : null;
        return {guildTotal, percentageChange, date};
      }),
    []
  );

  const headerValues = ['Дата', 'Урон гильдии', 'Изменение'];

  return (
    <Wrapper>
      <Button onClick={() => navigate('/')}>
        <Icon>
          <Arrow />
        </Icon>
      </Button>

      <Title>Звэк движение:</Title>
      <Container component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headerValues.map((value) => (
                <TableCell align="center" key={value}>
                  <b>{value}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {guildData.map(({guildTotal, percentageChange, date}, idx) => {
              const changeText =
                idx > 0
                  ? percentageChange === null
                    ? 'Нет данных'
                    : `${percentageChange > 0 ? 'увеличился' : 'уменьшился'} на ${Math.abs(percentageChange).toFixed(
                        2
                      )}%`
                  : '—';

              return (
                <TableRow key={`guild-${idx}`}>
                  <TableCell align="center">{date}</TableCell>
                  <TableCell align="center">{guildTotal}</TableCell>
                  <TableCell align="center">
                    <ChangeText value={percentageChange}>{changeText}</ChangeText>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem 0 1rem 2rem;
`;

const Container = styled(TableContainer)<{component: ElementType}>`
  &.MuiPaper-root {
    margin: 0 2rem;
    width: calc(100% - 4rem);
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

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

export default StatisticView;
