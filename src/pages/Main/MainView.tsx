import React, {useCallback, useState, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Table from './components/Table';
import PieChart from './components/PieChart';
import {latestZveks} from './DATA';
import Button from '@mui/material/Button';
import {font_header_5_bold} from 'theme/fonts';

const {guildTotal, date} = latestZveks[0].info[latestZveks[0].info.length - 1];

const MainView = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const pieChartData = useMemo(
    () =>
      latestZveks.map(({name, info}) => ({
        name,
        damage: info.reduce((acc, {damage = 0}) => acc + damage, 0),
      })),
    []
  );

  const tableData = useMemo(
    () =>
      latestZveks.map(({name, info}) => ({
        name,
        damage: info.reduce(
          (acc, {damageByDay = []}) => acc + damageByDay.reduce((dayAcc, dayDamage) => dayAcc + dayDamage, 0),
          0
        ),
      })),
    []
  );

  const handleSelected = useCallback((name: string, checked: boolean) => {
    setSelected((prevSelected) => (checked ? [...prevSelected, name] : prevSelected.filter((item) => item !== name)));
  }, []);

  return (
    <Wrapper>
      <Title>
        Последний ЗВЭК - {date}
        {selected.length > 1 && (
          <Button variant="contained" onClick={() => navigate(`/compare/${selected.join('^')}`)}>
            Сравнить
          </Button>
        )}
      </Title>
      <Content>
        <Table data={tableData} total={guildTotal} handleSelected={handleSelected} />
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
  grid-template-columns: calc(62% - 0.5rem) calc(38% - 0.5rem);
  grid-template-rows: calc(100vh - 5.6rem);
  grid-column-gap: 1rem;
`;

const Title = styled.div`
  ${font_header_5_bold};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 58%;
  height: 2.5rem;
`;

export default MainView;
