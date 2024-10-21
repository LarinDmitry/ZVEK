import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Table from './components/Table';
import PieChart from './components/PieChart';
import {lastZvek} from './DATA';
import Button from '@mui/material/Button';
import {font_header_5_bold} from 'theme/fonts';

const {data, total, date} = lastZvek;

const MainView = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelected = useCallback((name: string, checked: boolean) => {
    setSelected((prevSelected) => (checked ? [...prevSelected, name] : prevSelected.filter((item) => item !== name)));
  }, []);

  return (
    <Wrapper>
      <Title>
        Последний ЗВЭК - {date}
        {selected.length > 1 ? (
          <Button variant="contained" onClick={() => navigate(`/compare/${selected.join('%')}`)}>
            Сравнить
          </Button>
        ) : null}
      </Title>
      <Content>
        <Table data={data} total={total} handleSelected={handleSelected} />
        <PieChart data={data} total={total} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(58% - 0.5rem) calc(42% - 0.5rem);
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
