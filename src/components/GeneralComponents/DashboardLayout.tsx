import React, {FC, useMemo, useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import SvgIcon from '@mui/material/SvgIcon';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {globalLocalization} from 'services/GlobalUtils';
import SidebarIcon from 'assets/icons/sidebar.svg';
import Statistic from 'assets/icons/statistic.svg';
import Contacts from 'assets/icons/contacts.svg';
import Squid from 'assets/icons/squid.svg';
import Persons from 'assets/icons/persons.svg';
import {font_body_2_bold, font_header_4_bold} from 'theme/fonts';

// TODO нужно стилизировать и адаптировать всю дашбордину

const DashboardLayout: FC = () => {
  const {language} = useAppSelector(selectUserConfiguration);
  const {LAST, STAT, CONTACTS} = globalLocalization(language);

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

  return (
    <Wrapper isCollapsed={isSidebarCollapsed}>
      <Sidebar isCollapsed={isSidebarCollapsed}>
        <Title>
          {!isSidebarCollapsed && <div>ZVEK</div>}
          <Icon onClick={() => setIsSidebarCollapsed(prev => !prev)}>
            <SidebarIcon />
          </Icon>
        </Title>

        {menuLinks.map(({to, text, icon}) => (
          <MenuItem key={text} to={to}>
            {icon}
            {!isSidebarCollapsed && text}
          </MenuItem>
        ))}
      </Sidebar>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div<{isCollapsed: boolean}>`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({isCollapsed}) => (isCollapsed ? '6rem' : '16rem')} 1fr;
  transition: grid-template-columns 0.4s ease;
  background-color: ${({theme}) => theme.colors.gray050};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgb(230, 230, 230);
  ${font_header_4_bold};
  padding: 1rem;
`;

const Icon = styled(SvgIcon)`
    &.MuiSvgIcon-root {
        cursor: pointer;
        fill: white;
        height: 32px;
        width: 32px;

        &:hover {
            border: 1.5px solid rgb(127 145 241);
            border-radius: 5px;
        }
    }
`;

const Sidebar = styled.div<{isCollapsed: boolean}>`
  background: rgb(14, 30, 73);
  width: ${(props) => (props.isCollapsed ? '6rem' : '16rem')};
  transition: width 0.4s ease;
  justify-items: ${(props) => (props.isCollapsed ? 'center' : 'items')};
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 0 1rem;
  margin: 0.5rem;
  border-radius: 1rem;
  text-decoration: none;
  ${font_body_2_bold};
  color: rgb(230, 230, 230);

  &:hover {
    background-color: rgb(127 145 241);
  }
`;

export default DashboardLayout;
