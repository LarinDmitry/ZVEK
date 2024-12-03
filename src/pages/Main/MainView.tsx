import React, {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Table from './components/Table';
import PieChart from './components/PieChart';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {latestZveks} from '../../DATA';
import Info from 'assets/icons/info.svg';
import {font_header_5_bold, font_body_2_reg, font_body_1_reg} from 'theme/fonts';

const {guildTotal, date} = latestZveks[0].info[latestZveks[0].info.length - 1];

const MainView = () => {
  const navigate = useNavigate();
  const {selectedItems} = useAppSelector(selectUserConfiguration);

  const pieChartData = useMemo(
    () =>
      latestZveks.map(({name, info}) => ({
        name,
        damage: info[info.length - 1].damage,
      })),
    []
  );

  const tableData = useMemo(
    () =>
      latestZveks.map(({name, info}) => ({
        name,
        damage: info[info.length - 1].damage,
      })),
    []
  );

  return (
    <Wrapper>
      <Header>
        <Title>
          Последний ЗВЭК - {date}
          <Icon onClick={() => navigate('/statistic')}>
            <Info />
          </Icon>
        </Title>

        {selectedItems.length > 1 && (
          <Compare variant="contained" onClick={() => navigate(`/compare/${selectedItems.join('^')}`)}>
            Сравнить
          </Compare>
        )}
      </Header>
      <Content>
        <Table data={tableData} total={guildTotal} />
        <PieChart data={pieChartData} total={guildTotal} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(68% - 0.5rem) calc(32% - 0.5rem);
  grid-template-rows: calc(100vh - 5.6rem);
  grid-column-gap: 1rem;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 24rem;
    grid-row-gap: 2rem;
  }
`;

const Compare = styled(Button)`
  &.MuiButtonBase-root {
    ${font_body_2_reg};
    color: ${({theme}) => theme.colors.gray000};
    background: ${({theme}) => theme.colors.blue100};
    border-radius: 16px;
    text-transform: inherit;

    &:hover {
      background: ${({theme}) => theme.colors.blue100};
    }
  }
`;

const Header = styled.div`
  ${font_header_5_bold};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67%;
  height: 2.5rem;

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    ${font_body_1_reg};
    font-weight: bold;
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
  }
`;

export default MainView;
