import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {Doughnut} from 'react-chartjs-2';
import {Plugin} from 'chart.js';
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
  const {NAME, DAMAGE, IMPACT, TOP_PLAYERS, OTHERS} = localization(language);
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
    <svg fill="#000000" height="16px" width="16px" viewBox="0 0 330 330">
      <path
        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
      />
    </svg>
  );

  const centerText: Plugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      const {width, height, ctx} = chart;
      ctx.save();
      ctx.font = "bold 0.9rem 'Manrope', sans-serif";
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${(calculateTopPlayersData(5)[2].guildTotal / 1e12).toFixed(2)} T`, width / 2, height / 1.55);
      ctx.restore();
    },
  };

  return (
    <TopsDiv>
      <TopsTiles>
        <DoughnutTile>
          <Doughnut data={data} plugins={[centerText]} />
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  grid-template-columns: 32% 65%;
`;

const TopsTiles = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
  padding-top: 0;
  margin: 1rem;
  height: 88%;
  background: #fff;
`;

const DoughnutTile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

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
