import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';

const PageLayout: FC = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({theme}) => theme.colors.gray050};
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default PageLayout;
