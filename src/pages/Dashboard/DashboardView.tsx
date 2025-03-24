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
  grid-template-rows: calc(17% - 0.7rem) calc(53% - 0.6rem) calc(30% - 0.7rem);
  grid-row-gap: 1rem;
  @media (max-width: 800px) {
  grid-template-rows: auto;
  }
`;

export default DashboardView;
