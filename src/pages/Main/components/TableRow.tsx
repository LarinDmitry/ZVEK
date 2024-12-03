import React, {useCallback, useMemo} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import SvgIcon from '@mui/material/SvgIcon';
import useQuery from 'services/useQuery';
import {useAppDispatch} from 'services/hooks';
import {toggleItemSelection} from 'store/userSlice';
import {heroImages, qualityImages} from 'pages/Main/MainUtils';
import Gey from 'assets/images/gey.png';
import Arrow from 'assets/icons/arrow.svg';
import X from 'assets/images/quality/x.png';

const TableRow = ({
  idx,
  name,
  damage,
  total,
  details: {quality, stars = 0, temple = 0, damageDealer},
  isChecked,
  isExpanded,
  toggleRowExpansion,
}: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [, , isLaptop] = useQuery();

  const getImageComponent = useCallback(
    (type: string, images: Record<string, string>, fallback = X) => (
      <StyledImage src={images[type] || fallback} alt={type} />
    ),
    []
  );

  const rowData = useMemo(() => {
    const commonCells = [
      {
        key: 'checkbox',
        content: <Checkbox checked={isChecked} onChange={() => dispatch(toggleItemSelection(name))} />,
      },
      {key: 'index', content: idx + 1},
      {key: 'name', content: name},
      {key: 'quality', content: getImageComponent(quality || '', qualityImages)},
    ];

    const laptopCells = isLaptop
      ? [
          {key: 'stars', content: stars},
          {key: 'temple', content: temple},
          {
            key: 'hero',
            content: getImageComponent(damageDealer || '', heroImages, ''),
          },
          {key: 'damage', content: (damage / 1_000_000_000).toFixed(3)},
          {
            key: 'influence',
            content: ((damage / total) * 100).toFixed(3),
          },
        ]
      : [
          {
            key: 'expand',
            content: <ExpandIcon onClick={() => toggleRowExpansion(name)}>{isExpanded ? '−' : '+'}</ExpandIcon>,
          },
        ];

    return [...commonCells, ...laptopCells];
  }, [
    isChecked,
    idx,
    name,
    getImageComponent,
    quality,
    isLaptop,
    stars,
    temple,
    damageDealer,
    damage,
    total,
    isExpanded,
    dispatch,
    toggleRowExpansion,
  ]);

  const expandValues = useMemo(
    () => [
      {
        title: <img src={Gey} alt="gey" />,
        value: stars,
      },
      {
        title: 'Храм',
        value: temple,
      },
      {
        title: 'Урон',
        value: `${(damage / 1_000_000_000).toFixed(3)} млд`,
      },
      {
        title: 'Влияние',
        value: `${((damage / total) * 100).toFixed(3)} %`,
      },
    ],
    [damage, stars, temple, total]
  );

  return (
    <Row>
      {rowData.map(({key, content}) => (
        <Cell key={key}>{content}</Cell>
      ))}
      <Cell>
        <Icon onClick={() => navigate(`/details/${name}`)}>
          <Arrow />
        </Icon>
      </Cell>
      {isExpanded && !isLaptop && (
        <Collapsible>
          <Block>
            {expandValues.map(({title, value}) => (
              <div>
                {title}:<span>{value}</span>
              </div>
            ))}
          </Block>
          <Block>
            <Hero>{getImageComponent(damageDealer || '', heroImages, '')}</Hero>
          </Block>
        </Collapsible>
      )}
    </Row>
  );
};

const Cell = styled.div`
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Icon = styled(SvgIcon)<{direction?: string}>`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(${({direction}) => (direction ? (direction === 'asc' ? '0' : '-180') : '-90')}deg);
  }
`;

const ExpandIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
  padding: 0.2rem;
  user-select: none;
`;

const Block = styled.div`
  & > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 0.25rem;
  }
`;

const Hero = styled.div`
  height: 100%;

  img {
    width: 6rem !important;
    height: 6rem !important;
  }
`;

const Collapsible = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-top: 1px solid ${({theme}) => theme.colors.gray200};

  ${Hero} {
    justify-content: flex-end;
    margin: 0 1rem 0 0;
  }

  img {
    width: fit-content;
    height: 1.6rem;
  }

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    width: calc(100vw - 4rem);
    grid-template-columns: calc(50vw - 3rem) calc(50vw - 3rem);
    padding: 1rem;
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

  @media ${({theme}) => theme.breakpoints.maxLtg} {
    grid-template-columns: 4rem 2.3rem auto 4rem 3rem 3rem;
  }
`;

const StyledImage = styled.img`
  height: 3rem;
  width: 3rem;
`;

export default TableRow;
