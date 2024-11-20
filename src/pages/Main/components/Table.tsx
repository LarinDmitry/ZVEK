import React, {useCallback, useMemo, FC} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import SvgIcon from '@mui/material/SvgIcon';
import {useAppDispatch, useAppSelector} from 'services/hooks';
import {
  selectUserConfiguration,
  setSortConfig,
  toggleItemSelection,
  selectAllItems,
  clearSelection,
} from 'store/userSlice';
import {heroImages, qualityImages} from 'pages/Main/MainUtils';
import {teamDetails} from '../../../DATA';
import X from 'assets/images/quality/x.png';
import Gey from 'assets/images/gey.png';
import Arrow from 'assets/icons/arrow.svg';
import {font_body_4_bold} from 'theme/fonts';

interface Props {
  total: number;
  data: {
    name: string;
    damage: number;
  }[];
}

const Table: FC<Props> = ({data, total}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {sortConfig, selectedItems} = useAppSelector(selectUserConfiguration);

  const teamDetailsMap = useMemo(
    () =>
      teamDetails.reduce(
        (acc, {name, quality, stars, temple, damageDealer}) => {
          acc[name] = {quality, stars, temple, damageDealer};
          return acc;
        },
        {} as Record<string, {quality?: string; stars?: number; temple?: number; damageDealer?: string}>
      ),
    []
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    const {key, direction} = sortConfig;
    return [...data].sort((a, b) => {
      const aDetails = teamDetailsMap[a.name] || {};
      const bDetails = teamDetailsMap[b.name] || {};

      const getValue = (item: typeof a, details: typeof aDetails) => {
        switch (key) {
          case 'name':
            return item.name;
          case 'quality':
            return Object.keys(qualityImages).indexOf(details.quality || '');
          case 'gey':
            return details.stars || 0;
          case 'temple':
            return details.temple || 0;
          case 'hero':
            return Object.keys(heroImages).indexOf(details.damageDealer || '');
          case 'damage':
            return item.damage;
          case 'influence':
            return (item.damage / total) * 100;
          default:
            return 0;
        }
      };

      const aValue = getValue(a, aDetails);
      const bValue = getValue(b, bDetails);

      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig, total, teamDetailsMap]);

  const toggleSelectAll = useCallback(
    (checked: boolean) =>
      checked ? dispatch(selectAllItems(sortedData.map(({name}) => name))) : dispatch(clearSelection()),
    [dispatch, sortedData]
  );

  const headerArr = useMemo(
    () => [
      <Checkbox
        indeterminate={selectedItems.length > 0 && selectedItems.length < data.length}
        checked={selectedItems.length === data.length}
        onChange={({target: {checked}}) => toggleSelectAll(checked)}
      />,
      '№',
      'Никнейм',
      'Качество',
      <img src={Gey} alt="gey" />,
      'Храм',
      'Герой',
      'Урон, млд',
      'Влияние, %',
      '',
    ],
    [data.length, selectedItems.length, toggleSelectAll]
  );

  const getImageComponent = useCallback(
    (type: string, images: Record<string, string>, fallback = X) => (
      <StyledImage src={images[type] || fallback} alt={type} />
    ),
    []
  );

  const requestSort = useCallback(
    (key: string) => {
      if (key && key !== '№') {
        dispatch(
          setSortConfig(
            sortConfig?.key === key && sortConfig.direction === 'asc'
              ? {key, direction: 'desc'}
              : {key, direction: 'asc'}
          )
        );
      }
    },
    [dispatch, sortConfig?.direction, sortConfig?.key]
  );

  const toggleSelectItem = useCallback((name: string) => dispatch(toggleItemSelection(name)), [dispatch]);

  const SortIcon = ({columnKey}: {columnKey: string}) =>
    sortConfig?.key === columnKey ? (
      <Icon direction={sortConfig.direction}>
        <Arrow />
      </Icon>
    ) : null;

  return (
    <Wrapper>
      <Header>
        {headerArr.map((item, idx) => {
          const key = ['', '№', 'name', 'quality', 'gey', 'temple', 'hero', 'damage', 'influence', ''][idx];
          return (
            <HCell key={idx} onClick={() => requestSort(key)}>
              {item}
              {key && <SortIcon columnKey={key} />}
            </HCell>
          );
        })}
      </Header>
      {sortedData.map(({name, damage}, idx) => {
        const isChecked = selectedItems.includes(name);
        const {quality, stars = 0, temple = 0, damageDealer} = teamDetailsMap[name] || {};

        return (
          <Row key={name}>
            <Cell>
              <Checkbox checked={isChecked} onChange={() => toggleSelectItem(name)} />
            </Cell>
            <Cell>{idx + 1}</Cell>
            <Cell>{name}</Cell>
            <Cell>{getImageComponent(quality || '', qualityImages)}</Cell>
            <Cell>{stars}</Cell>
            <Cell>{temple}</Cell>
            <Cell>{getImageComponent(damageDealer || '', heroImages, '')}</Cell>
            <Cell>{(damage / 1_000_000_000).toFixed(3)}</Cell>
            <Cell>{((damage / total) * 100).toFixed(3)}</Cell>
            <Cell>
              <Icon onClick={() => navigate(`/details/${name}`)}>
                <Arrow />
              </Icon>
            </Cell>
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: auto;
  height: calc(100vh - 6rem);
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.gray000};
`;

const Header = styled.div`
  ${font_body_4_bold};
  display: grid;
  grid-template-columns: 4rem 1.5rem auto 6rem 6rem 6rem 6rem 7rem 7rem 3rem;
  color: ${({theme}) => theme.colors.gray090};
  height: 3rem;
  align-items: center;
  border-bottom: 1px solid rgb(224, 224, 224);
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.colors.gray000};
  z-index: 1;

  img {
    width: fit-content;
    height: 1.6rem;
  }
`;

const HCell = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Cell = styled.div`
  padding: 0.5rem;
`;

const Icon = styled(SvgIcon)<{direction?: string}>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(${({direction}) => (direction ? (direction === 'asc' ? '0' : '-180') : '-90')}deg);
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 4rem 1.5rem auto 6rem 6rem 6rem 6rem 7rem 7rem 3rem;
  border-bottom: 1px solid rgb(224, 224, 224);
  align-items: center;

  &:hover {
    background-color: ${({theme}) => theme.colors.blue050};

    ${Icon} {
      fill: ${({theme}) => theme.colors.gray100};
    }
  }
`;

const StyledImage = styled.img`
  height: 3rem;
  width: 3rem;
`;

export default Table;
