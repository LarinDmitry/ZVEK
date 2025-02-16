import React, {FC, useMemo} from 'react';
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {globalLocalization} from 'services/GlobalUtils';
import Statistic from 'assets/icons/statistic.svg';
import Contacts from 'assets/icons/contacts.svg';

// TODO нужно стилизировать и адаптировать всю дашбордину

const DashboardLayout: FC = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {LAST, STAT, CONTACTS} = globalLocalization(language);

  const menuLinks = useMemo(
    () => [
      {
        to: '/main',
        icon: <Statistic />,
        text: LAST,
      },
      {
        to: '/bossHP',
        icon: <Statistic />,
        text: 'Calculator',
      },
      {
        to: '/statistic',
        icon: <Statistic />,
        text: STAT,
      },
      {
        to: '/contacts',
        icon: <Contacts />,
        text: CONTACTS,
      },
    ],
    [CONTACTS, LAST, STAT]
  );

  return (
    <Wrapper>
      <div>
        {menuLinks.map(({to, text, icon}) => (
          <MenuItem key={text} to={to}>
            {icon}
            {text}
          </MenuItem>
        ))}
      </div>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 16rem 1fr;
  background-color: ${({theme}) => theme.colors.gray050};
`;

const MenuItem = styled(Link)`
  border-left: 0.25rem solid transparent;
  text-decoration: none;
  display: grid;
  align-items: center;
  grid-template-columns: 1.5rem 1fr;
  grid-column-gap: 1.25rem;
  height: 3.125rem;
  padding-left: 1rem;
`;

export default DashboardLayout;
