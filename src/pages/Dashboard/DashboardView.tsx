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
  grid-template-rows: 20% 50% 30%;
`;

export default DashboardView;
