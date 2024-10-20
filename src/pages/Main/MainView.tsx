import React from 'react';
import styled from 'styled-components';
import Table from './components/Table';
import PieChart from './components/PieChart';
import {lastZvek} from './DATA';
import {font_header_5_bold} from 'theme/fonts';

const {data, total, date} = lastZvek;

const MainView = () => (
  <Wrapper>
    <Title>Последний ЗВЭК - {date}</Title>
    <Content>
      <Table data={data} total={total} />
      <PieChart data={data} total={total} />
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 58% auto;
  grid-template-rows: calc(100vh - 4.7rem);
  grid-column-gap: 1rem;
`;

const Title = styled.div`
  ${font_header_5_bold};
  margin-bottom: 1rem;
`;

export default MainView;
