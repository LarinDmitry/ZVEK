import React, {ElementType} from 'react';
import styled from 'styled-components';
import BackBtn from 'components/GeneralComponents/BackBtn';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {font_body_2_bold} from 'theme/fonts';

const ContactsView = () => {
  const arrValues = [
    {
      position: 'Глава',
      name: 'Артем',
      link: 'Artem_Chuvanov',
    },
    {
      position: 'Зам. главы',
      name: 'Марина',
      link: 'MarVik3108',
    },
    {
      position: 'Администратор',
      name: 'Роман',
      link: 'Matpockyx',
    },
    {
      position: 'Администратор',
      name: 'Санта',
      link: 'ErbolSanta',
    },
    {
      position: 'Предложения по сайту',
      name: 'Дмитрий',
      link: 'Larin_Dmytro',
    },
  ];

  return (
    <Wrapper>
      <BackBtn />
      <Title>Те, к кому можно обратиться:</Title>
      <Container component={Paper}>
        <Table>
          <TableBody>
            {arrValues.map(({name, link, position}) => (
              <Row key={link}>
                <TableCell align="center">{position}</TableCell>
                <TableCell align="center">
                  <a href={`https://t.me/${link}`} target="_blank">
                    {name}
                  </a>
                </TableCell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Container = styled(TableContainer)<{component: ElementType}>`
  &.MuiPaper-root {
    margin: 0 1rem;
    width: calc(100% - 2rem);
  }
`;

const Title = styled.div`
  ${font_body_2_bold};
  margin: 1rem;
  display: flex;
  align-items: center;
`;

const Row = styled(TableRow)`
  &.MuiTableRow-root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ContactsView;
