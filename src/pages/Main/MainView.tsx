import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import DATA from './DATA';
import Checkbox from '@mui/material/Checkbox';
import {font_body_4_bold} from 'theme/fonts';

const {data, total, date} = DATA;

const MainView = () => {
  const headerArr = useMemo(() => ['', '№', 'Nickname', 'Damage, billions', 'Impact, %'], []);

  const handleChange = useCallback((value: boolean, name: string) => {
    console.log(name, 'name');
    console.log(value, 'value');
  }, []);

  return (
    <Wrapper>
      Последний ЗВЭК - {date}
      <Table>
        <Header>
          {headerArr.map((item) => (
            <HCell key={item}>{item}</HCell>
          ))}
        </Header>
        {data.map(({name, damage}, idx) => (
          <Row key={name}>
            <Cell>
              <Checkbox onChange={({target: {checked}}) => handleChange(checked, name)} />
            </Cell>
            <Cell>{idx + 1}</Cell>
            <Cell>{name}</Cell>
            <Cell>{(damage / 1000000000).toFixed(3)}</Cell>
            <Cell>{((damage / total) * 100).toFixed(3)}</Cell>
          </Row>
        ))}
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
`;

const Table = styled.div`
  overflow: auto;
  height: calc(100vh - 10rem);
  width: calc(100vw - 40rem);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.gray000};
`;

const Header = styled.div`
  ${font_body_4_bold};
  display: grid;
  grid-template-columns: 50px 30px auto 7rem 7rem;
  color: ${({theme}) => theme.colors.gray090};
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

const HCell = styled.div`
  padding: 0.5rem;
`;

const Cell = styled.div`
  padding: 0.5rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 50px 30px auto 7rem 7rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  align-items: center;
`;

export default MainView;
