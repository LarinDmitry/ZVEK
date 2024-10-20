import React, {useCallback, useMemo, FC, ReactNode} from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import {teamDetails} from 'pages/Main/DATA';
import X from 'assets/images/quality/x.png';
import B from 'assets/images/quality/b+.png';
import A_Low from 'assets/images/quality/a-.png';
import A from 'assets/images/quality/a.png';
import A_High from 'assets/images/quality/a+.png';
import S from 'assets/images/quality/s.png';
import SS from 'assets/images/quality/ss.png';
import SSS from 'assets/images/quality/sss.png';
import Aspen from 'assets/images/heroes/aspen.png';
import Vulkan from 'assets/images/heroes/vulkan.png';
import Vesa from 'assets/images/heroes/vesa.png';
import Mokman from 'assets/images/heroes/mokman.png';
import {font_body_4_bold} from 'theme/fonts';

interface Props {
  total: number;
  data: {
    name: string;
    damage: number;
  }[];
}

const Table: FC<Props> = ({data, total}) => {
  const headerArr = useMemo(() => ['', '№', 'Nickname', 'Quality', 'Hero', 'Damage, billions', 'Impact, %', ''], []);

  const handleChange = useCallback((value: boolean, name: string) => {
    console.log(name, 'name');
    console.log(value, 'value');
  }, []);

  const getQualityType = useCallback((type: string) => {
    const target: {[key: string]: ReactNode} = {
      '': <Quality src={X} alt="" />,
      'b+': <Quality src={B} alt="b+" />,
      'a-': <Quality src={A_Low} alt="a-" />,
      a: <Quality src={A} alt="a" />,
      'a+': <Quality src={A_High} alt="a+" />,
      s: <Quality src={S} alt="s" />,
      ss: <Quality src={SS} alt="ss" />,
      sss: <Quality src={SSS} alt="sss" />,
    };

    return target[type] || '';
  }, []);

  const getHeroType = useCallback((type: string) => {
    const target: {[key: string]: ReactNode} = {
      aspen: <Hero src={Aspen} alt="aspen" />,
      vulkan: <Hero src={Vulkan} alt="vulkan" />,
      mokman: <Hero src={Mokman} alt="mokman" />,
      vesa: <Hero src={Vesa} alt="vesa" />,
    };

    return target[type] || '';
  }, []);

  return (
    <Wrapper>
      <Header>
        {headerArr.map((item, idx) => (
          <HCell key={idx}>{item}</HCell>
        ))}
      </Header>
      {data.map(({name, damage}, idx) => (
        <Row key={name}>
          <Cell>
            <Checkbox onChange={({target: {checked}}) => handleChange(checked, name)} />
          </Cell>
          <Cell>{idx + 1}</Cell>
          <Cell>{name}</Cell>
          <Cell>{getQualityType(teamDetails.find((detail) => detail.name === name)?.quality || '')}</Cell>
          <Cell>{getHeroType(teamDetails.find((detail) => detail.name === name)?.damageDealer || '')}</Cell>
          <Cell>{(damage / 1000000000).toFixed(3)}</Cell>
          <Cell>{((damage / total) * 100).toFixed(3)}</Cell>
          <Cell>{'>'}</Cell>
        </Row>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 5rem);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.gray000};
`;

const Header = styled.div`
  ${font_body_4_bold};
  display: grid;
  grid-template-columns: 4rem 1.5rem auto 4rem 4rem 7rem 7rem 3rem;
  color: ${({theme}) => theme.colors.gray090};
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.colors.gray000};
  z-index: 1;
`;

const HCell = styled.div`
  padding: 0.5rem;
`;

const Cell = styled.div`
  padding: 0.5rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 4rem 1.5rem auto 4rem 4rem 7rem 7rem 3rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  align-items: center;
`;

const Quality = styled.img`
  height: 3rem;
  width: 3rem;
`;

const Hero = styled.img`
  height: 3rem;
  width: 3rem;
`;

export default Table;
