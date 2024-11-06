import React, {useCallback, useMemo} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import {backgroundColor, hoverBackgroundColor} from 'pages/Main/MainUtils';
import {DamageByDayProps, TransformedDataItemProps} from 'pages/Compare/CompareUtils';
import {latestZveks} from 'pages/Main/DATA';
import Arrow from 'assets/icons/arrow.svg';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const CompareView = () => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();

  const damageData = useMemo(() => {
    if (!id) return null;

    return id.split('^').map((item) => {
      const entry = latestZveks.find(({name}) => name === item);
      return {name: entry?.name, damageByDay: entry?.damageByDay};
    });
  }, [id]);

  const transformedData: TransformedDataItemProps[] = useMemo(() => {
    if (!damageData) return [];

    return damageData.reduce((acc: TransformedDataItemProps[], {damageByDay}, index) => {
      damageByDay?.forEach(({date, damage}: DamageByDayProps) => {
        const existingDate = acc.find((item) => item.date === date);
        if (existingDate) {
          existingDate[`data${index + 1}`] = damage;
        } else {
          acc.push({date, [`data${index + 1}`]: damage});
        }
      });
      return acc;
    }, []);
  }, [damageData]);

  const maxValuesByDate = useMemo(
    () =>
      transformedData.map((dataItem) => {
        const values = Object.keys(dataItem)
          .filter((key) => key !== 'date')
          .map((key) => dataItem[key] as number);
        return Math.max(...values);
      }),
    [transformedData]
  );

  const data = useMemo(
    () => ({
      labels: transformedData.map(({date}) => date),
      datasets: damageData
        ? damageData.map((item, index) => ({
            label: item.name || `Data ${index + 1}`,
            data: transformedData.map((dataItem) => dataItem[`data${index + 1}`] || 0),
            backgroundColor: backgroundColor[index % backgroundColor.length],
            hoverBackgroundColor: hoverBackgroundColor[index % hoverBackgroundColor.length],
          }))
        : [],
    }),
    [damageData, transformedData]
  );

  const getOptions = useCallback(
    (text: string) => ({
      responsive: true,
      scales: {
        x: {stacked: false},
        y: {stacked: false},
      },
      plugins: {
        legend: {position: 'top'},
        title: {display: true, text},
        datalabels: {
          display: true,
          color: 'rgb(0, 0, 0)',
          align: 'end',
          anchor: 'end',
          formatter: (value: number, context: any) => {
            const dateIndex = context.dataIndex;
            const maxValue = maxValuesByDate[dateIndex];

            if (maxValue) {
              const percentage = (value / maxValue) * 100;
              return percentage === 100 ? '' : `${percentage.toFixed(1)}%`;
            }

            return '';
          },
        },
      },
    }),
    [maxValuesByDate]
  ) as any;

  return (
    <div>
      <Button>
        <Icon onClick={() => navigate('/')}>
          <Arrow />
        </Icon>
      </Button>
      <Charts>
        <div>
          <Bar options={getOptions('Сравнение урона последних трех ЗВЭК')} data={data} />
        </div>
        <div>
          <Bar options={getOptions('Сравнение урона последнего ЗВЭК')} data={data} />
        </div>
      </Charts>
    </div>
  );
};

const Icon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    cursor: pointer;
    fill: ${({theme}) => theme.colors.gray090};
    transform: rotate(90deg);
  }
`;

const Charts = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-column-gap: 1rem;
`;

export default CompareView;
