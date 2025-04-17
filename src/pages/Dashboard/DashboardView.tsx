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
  height: 100vh;
  padding: 1rem 1rem 1.5rem;
  display: grid;
  grid-template-rows: calc(15% - 2rem) calc(58% - 2rem) auto;
  grid-row-gap: 1rem;
`;

export default DashboardView;
