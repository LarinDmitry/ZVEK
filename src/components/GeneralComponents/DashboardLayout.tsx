import React, { FC, useMemo, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from 'services/hooks';
import { selectUserConfiguration } from 'store/userSlice';
import { globalLocalization } from 'services/GlobalUtils';
import SidebarIcon from 'assets/icons/sidebar.svg';
import Statistic from 'assets/icons/statistic.svg';
import Contacts from 'assets/icons/contacts.svg';
import Squid from 'assets/icons/squid.svg';
import Persons from 'assets/icons/persons.svg';
import { font_body_2_bold, font_header_4_bold } from 'theme/fonts';

// TODO нужно стилизировать и адаптировать всю дашбордину

const DashboardLayout: FC = () => {
  const { language } = useAppSelector(selectUserConfiguration);
  const { LAST, STAT, CONTACTS } = globalLocalization(language);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menuLinks = useMemo(
    () => [
      {
        to: '/main',
        icon: <Persons />,
        text: LAST,
      },
      {
        to: '/bossHP',
        icon: <Squid />,
        text: 'BossHP',
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

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <Wrapper isCollapsed={isSidebarCollapsed}>
      <Sidebar isCollapsed={isSidebarCollapsed}>
        {isSidebarCollapsed ? (
          <SidebarTitle onClick={toggleSidebar}>
            <SidebarIcon />
          </SidebarTitle>
        ) : (
          <SidebarTitle onClick={toggleSidebar}>
            <div>ZVEK</div>
            <SidebarIcon />
          </SidebarTitle>
        )}
        {menuLinks.map(({ to, text, icon }) => (
          isSidebarCollapsed ? (
            <MenuItem key={text} to={to}>
              {icon}
            </MenuItem>
          ) : (
            <MenuItem key={text} to={to}>
              {icon}
              {text}
            </MenuItem>
          )
        ))}
      </Sidebar>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div<{isCollapsed: boolean}>`
    height: 100vh;
    display: grid;
    grid-template-columns: ${(props) => (props.isCollapsed ? '6rem' : '16rem')} 1fr;
    background-color: ${({ theme }) => theme.colors.gray050};
`;

const SidebarTitle = styled.div`
    display: grid;
    grid-template-columns: 84% 16%;
    color: rgb(230, 230, 230);
    ${font_header_4_bold};
    padding: 1rem;
    cursor: pointer;
`;

const Sidebar = styled.div<{ isCollapsed: boolean }>`
    background: rgb(14, 30, 73);
    width: ${(props) => (props.isCollapsed ? '6rem' : '16rem')};
    transition: width 0.3s ease;
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
    margin: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 1rem;
    ${font_body_2_bold};
    color: rgb(230, 230, 230);

    &:hover {
        background-color: rgb(248, 203, 12);
    }
`;

export default DashboardLayout;