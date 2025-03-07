import React from 'react';
import styled from 'styled-components';
import Bars from './components/Bars';
import Tops from './components/Tops';
import Charts from './components/Charts';

const DashboardView = () => (
  <Wrapper>
    <Bars />
    <Tops />
    <Charts />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem 1rem 1.5rem;
  display: grid;
  grid-template-rows: calc(35% - 7rem) calc(65% - 7rem) 12rem;
  grid-row-gap: 1rem;
`;

export default DashboardView;
