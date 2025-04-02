import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';
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
import {font_body_1_bold} from 'theme/fonts';

const Tops = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {NAME, TOTAL, DAMAGE, IMPACT, TOP_PLAYERS, OTHERS} = localization(language);
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

  const headerValues = [NAME, DAMAGE, IMPACT, ''];

  const total = calculateTopPlayersData(5)[2].guildTotal;
  const top5Percentage = calculateTopPlayersData(5)[2].topDamagePercentage;
  const other = (100 - top5Percentage) * total;
  const top5 = top5Percentage * total;

  const data = {
    labels: [TOP_PLAYERS, OTHERS],
    datasets: [
      {
        data: [top5, other],
        backgroundColor: ['rgba(72, 99, 235, 0.7)', 'rgba(68, 217, 38, 0.7)'],
        hoverOffset: 4,
      },
    ],
  };

  const arrowIcon = (
    <svg width="16" height="16" viewBox="1 1 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  return (
    <TopsDiv>
      <TopsTiles>
        <DoughnutTile>
          <Doughnut data={data} />
          <StyledText>{TOTAL}: {(calculateTopPlayersData(5)[2].guildTotal / 1e12).toFixed(2)} T</StyledText>
          <ArrowToMain onClick={() => navigate('/main')}>{arrowIcon}</ArrowToMain>
        </DoughnutTile>
      </TopsTiles>
      <TopsTiles>
        <Table>
          <TableHead>
            <HeadRow>
              {headerValues.map((value) => (
                <TableCell align="center" key={value}>
                  <b>{value}</b>
                </TableCell>
              ))}
            </HeadRow>
          </TableHead>
          <TableBody>
            {calculateTopPlayersData(5)[2].topPlayers.map((name, idx) => {
              const player = tableData.find((p) => p.name === name) || {damage: 0, guildTotal: 1};

              return (
                <Row key={idx} onClick={() => navigate(`/details/${name}`)}>
                  <TableCell align="center">{name}</TableCell>
                  <TableCell align="center">{(player.damage / 1e12).toFixed(2)}</TableCell>
                  <TableCell align="center">{((player.damage / player.guildTotal) * 100).toFixed(2)}%</TableCell>
                  <TableCell align="center">{arrowIcon}</TableCell>
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
  grid-gap: 1rem;
  grid-template-columns: 32% 65%;
    height: fit-content;
`;

const TopsTiles = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 0 1rem 1rem 1rem;
  margin: 1rem;
  background: #fff;
`;

const DoughnutTile = styled.div`
  position: relative;
`;

const StyledText = styled.div`
text-align: center;
    ${font_body_1_bold};
    height: fit-content;
`

const ArrowToMain = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 0 0 0;
  cursor: pointer;
  height: 20px;
  z-index: 10;
`;

const HeadRow = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 1fr;
  }
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 1fr;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba(83, 158, 236, 0.6);
    }
  }
`;
