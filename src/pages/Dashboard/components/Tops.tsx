import React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {calculateTopPlayersData} from 'services/GlobalUtils';
import {localization} from '../DashboardUtils';

const Tops = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {NAME, DAMAGE, PERCENT} = localization(language);
  
    const headerValues = [NAME, DAMAGE, PERCENT];

  return (
    <TopsDiv>
      <TopsTiles>
        Doughnut
      </TopsTiles>
      <TopsTiles>
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
{calculateTopPlayersData(5)[2].topPlayers.map((name, idx) => (
    <Row key={idx}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{calculateTopPlayersData(5)[2].topDamagePercentage.toFixed(2)}%</TableCell>
    </Row>
  ))}

        </TableBody>
      </Table></TopsTiles>
    </TopsDiv>
  );
};

export default Tops;

const TopsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-template-columns: 30% 68%;
`;

const TopsTiles = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin: 1rem;
  height: 88%;
  background: #fff;
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
