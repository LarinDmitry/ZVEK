import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {calculateTopPlayersData} from 'services/GlobalUtils';
import {localization} from '../DashboardUtils';
import {latestZveks} from 'src/DATA';

const Tops = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {NAME, DAMAGE, IMPACT} = localization(language);
  const navigate = useNavigate();

  const tableData = useMemo(
    () =>
      latestZveks.map(({name, info}) => ({
        name,
        damage: info[info.length - 1].damage,
        guildTotal: info[info.length - 1].guildTotal,
      })),
    []
  );

  const arrFull = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557" />
    </svg>
  );

  const arrEmpty = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933.042-.028a.147.147 0 0 0 0-.252l-.042-.028zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3z" />
    </svg>
  );

  const headerValues = [NAME, DAMAGE, IMPACT];

  return (
    <TopsDiv>
      <TopsTiles>Doughnut</TopsTiles>
      <TopsTiles>
        <Table>
          <TableHead>
            <Row>
              {headerValues.map((value) => (
                <TableCell align="center" key={value}>
                  <b>{value}</b>
                </TableCell>
              ))}
              <TableCell align="center" onClick={() => navigate('/main')}>
                <Button>{arrFull}</Button>
              </TableCell>
            </Row>
          </TableHead>
          <TableBody>
            {calculateTopPlayersData(5)[2].topPlayers.map((name, idx) => {
              const player = tableData.find((p) => p.name === name) || {damage: 0, guildTotal: 1};

              return (
                <Row key={idx}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{(player.damage / 1e12).toFixed(2)}</TableCell>
                  <TableCell align="center">{((player.damage / player.guildTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell align="center" onClick={() => navigate(`/details/${name}`)}>
                    <Button>{arrEmpty}</Button>
                  </TableCell>
                </Row>
              );
            })}
          </TableBody>
        </Table>
      </TopsTiles>
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
    grid-template-columns: repeat(4, 1fr);
    height: 2.4rem;
    align-items: center;
    text-align: center;
    margin: 0.3rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;
