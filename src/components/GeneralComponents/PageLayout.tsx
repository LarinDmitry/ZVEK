import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import LanguageSelector from 'components/GeneralComponents/LanguageSelector';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';

const PageLayout: FC = () => {
  const {language} = useAppSelector(selectUserConfiguration);

  return (
    <Wrapper>
      <LanguageSelector language={language} />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;
  background-color: ${({theme}) => theme.colors.gray050};
`;

export default PageLayout;
