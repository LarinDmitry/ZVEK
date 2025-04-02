import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {useGuildData, globalLocalization} from 'services/GlobalUtils';
import {localization} from '../DashboardUtils';
import {latestZveks, guildStatistic} from 'src/DATA';
import {font_body_2_bold} from 'theme/fonts';

interface PlayerData {
  name: string;
  damageLastZvek: number;
  damagePreviousZvek: number;
  percentageChange: number | null;
}


// по барам:
// поправить стрелки и размер шрифта
// поведение для всех баров

// center
// більший дів
// 1fr 1fr auto -> 1fr auto auto
//
//
// dashboard layout
//
// таблиця щоб займала весь дів

const Bars = () => {
  console.log('Bars');
  const guildData = useGuildData();
  const {language} = useAppSelector(selectUserConfiguration);

  const {BEST} = localization(language);
  const {NO_DATA, GROW, GUILD_RATING, NEWBIES} = globalLocalization(language);

  const changeText =
    guildData[2].percentageChange === null
      ? `${NO_DATA}`
      : `${guildData[2].percentageChange > 0 ? '+' : '-'} ${Math.abs(guildData[2].percentageChange).toFixed(2)}%`;

  const playerData: PlayerData[] = useMemo(
    () =>
      latestZveks.reduce<PlayerData[]>((acc, {name, info}) => {
        const [previousZvek, lastZvek] = info.slice(-2);
        const percentageChange = ((lastZvek.damage - previousZvek.damage) / previousZvek.damage) * 100;

        percentageChange > 0 &&
          percentageChange !== Infinity &&
          acc.push({
            name,
            damageLastZvek: lastZvek.damage,
            damagePreviousZvek: previousZvek.damage,
            percentageChange,
          });
        acc.sort((a, b) => b.percentageChange! - a.percentageChange!);
        acc = acc.slice(0, 1);

        return acc;
      }, []),
    []
  );

  const growIcon = (
    <svg width="14" height="14" viewBox="1 1 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const decreaseIcon = (
    <svg width="14" height="14" viewBox="1 1 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const zeroArrow = (
    <svg width="14px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2070711,2.29150857 L19.2070711,6.28728008 C19.5677136,6.64754135 19.5957745,7.2146968 19.291028,7.60715135 L19.2079078,7.70140455 L15.2079078,11.7066438 C14.8176391,12.0974236 14.1844743,12.097838 13.7936945,11.7075694 C13.4329747,11.3473215 13.4048739,10.7801087 13.709642,10.3876179 L13.7927689,10.2933562 L16.0833383,7.9999892 L5.49966166,8 C4.98682582,8 4.5641545,7.61395981 4.50638939,7.11662112 L4.49966166,7 C4.49966166,6.48716416 4.88570185,6.06449284 5.38304053,6.00672773 L5.49966166,6 L16.0903383,5.9999892 L13.7936056,3.70646983 C13.4329311,3.34617656 13.4049015,2.77896025 13.7097189,2.38650778 L13.7928577,2.29225647 C14.153151,1.93158192 14.7203673,1.90355241 15.1128198,2.2083698 L15.2070711,2.29150857 L19.2070711,6.28728008 L15.2070711,2.29150857 Z M19.490394,16.8833789 L19.4971217,17 C19.4971217,17.5128358 19.1110815,17.9355072 18.6137428,17.9932723 L18.4971217,18 L7.91333834,17.9999892 L10.2071125,20.2925607 C10.5677659,20.6528751 10.5957623,21.220093 10.2909219,21.6125277 L10.2077776,21.7067741 C9.84746324,22.0674276 9.28024529,22.0954239 8.88781066,21.7905836 L8.79356421,21.7074393 L4.79356421,17.7112002 C4.43291063,17.3508857 4.40491442,16.7836675 4.70975502,16.3912329 L4.79289937,16.2969864 L8.79289937,12.2932256 C9.18324012,11.9025178 9.81640503,11.9022203 10.2071128,12.292561 C10.5677661,12.6528756 10.5957622,13.2200935 10.2909216,13.612528 L10.2077773,13.7067744 L7.91733834,15.9999892 L18.4971217,16 C19.0099576,16 19.4326289,16.3860402 19.490394,16.8833789 L19.4971217,17 L19.490394,16.8833789 Z">
      </path>
    </svg>
  );

  const guildRateChange = guildStatistic[1].rate - guildStatistic[2].rate;

  return (
    <BarsDiv>
      <ZvekChange>
        <BoldDiv>{(guildData[2].total / 1e12).toFixed(0)} T</BoldDiv>
        <StyledDiv percentageChange={guildData[2].percentageChange ?? 0}>{guildData[2].percentageChange === 0 ? "" : changeText}</StyledDiv>
        <StyledIcon percentageChange={guildData[2].percentageChange ?? 0}>
          {(guildData[2].percentageChange ?? 0) > 0 ? growIcon : (guildData[2].percentageChange ?? 0) ? decreaseIcon : zeroArrow}
        </StyledIcon>
        <StyledText>{GROW}</StyledText>
      </ZvekChange>

      {playerData.map(({name, percentageChange}) => {
        return (
          <TopPlayers>
            <BoldDiv>{name}</BoldDiv>
            <StyledDiv percentageChange={percentageChange!}>+{Math.abs(percentageChange!).toFixed(2)}%</StyledDiv>
            <StyledIcon percentageChange={percentageChange!}>
              {(percentageChange! ?? 0) > 0 ? growIcon : decreaseIcon}
            </StyledIcon>
            <StyledText>{BEST}</StyledText>
          </TopPlayers>
        );
      })}

      <GuildRating>
        <ChangeText value={guildRateChange}>{guildStatistic[2].rate}</ChangeText>
        <StyledDiv percentageChange={guildRateChange}>{guildRateChange > 0 ? `(${-guildRateChange})` : guildRateChange < 0 ? `(+${-guildRateChange})` : ""}</StyledDiv>
        <StyledIcon percentageChange={guildRateChange}>{guildRateChange > 0 ? growIcon : guildRateChange < 0 ? decreaseIcon : zeroArrow}</StyledIcon>
        <StyledText>{GUILD_RATING}</StyledText>
      </GuildRating>

      <Newbies>
        <NewbiesDiv value = {guildStatistic[2].newbies}>{guildStatistic[2].newbies}</NewbiesDiv>
        <StyledText>{NEWBIES}</StyledText>
      </Newbies>
    </BarsDiv>
  );
};

export default Bars;

const BarsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  @media (max-width: 800px) {
  grid-template-columns: 1fr;
  }
`;

const ZvekChange = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto;
  gap: 0.3rem;
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0.5rem 0 1rem;
  margin: 0.5rem;
  background-color: #fff;
  height: 6rem;
`;

const StyledText = styled.div`
  width: 100%;
  white-space: nowrap;
`;

const BoldDiv = styled.div`
  ${font_body_2_bold};
`;

const TopPlayers = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto;
  gap: 0.3rem;
  border-radius: 6px;
  height: 6rem;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0.5rem 0 1rem;
  margin: 0.5rem;
  background-color: #fff;
`;

const GuildRating = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-rows: auto;
    gap: 0.3rem;
  border-radius: 6px;
  height: 6rem;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0.5rem 0 1rem;
  margin: 0.5rem;
  background-color: #fff;
`;

const ChangeText = styled.span<{value: number | null}>`
  color: ${({
    value,
    theme: {
      colors: {red100, green100, gray100},
    },
  }) => {
    if (value === null) return gray100;
    if (value > 0) return green100;
    if (value < 0) return red100;
    return gray100;
  }};
  ${font_body_2_bold};
`;

const Newbies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0.3rem;
  border-radius: 6px;
  height: 6rem;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0.5rem 0 1rem;
  margin: 0.5rem;
  background-color: #fff;
`;

const NewbiesDiv = styled.div<{value: number}>`
    color: ${({value, theme}) => (value > 0 ? theme.colors.green100 : theme.colors.gray100)};
  ${font_body_2_bold};
  margin-bottom: 0.5rem;
`;

const StyledDiv = styled.div<{percentageChange: number}>`
  color: ${({percentageChange, theme}) => (percentageChange > 0 ? theme.colors.green100 : theme.colors.red100)};
  justify-self: end;
  white-space: nowrap;
`;

const StyledIcon = styled.div<{percentageChange: number}>`
  color: ${({percentageChange, theme}) => (percentageChange > 0 ? theme.colors.green100 : percentageChange < 0 ? theme.colors.red100 : theme.colors.gray100)};
  background-color: ${({percentageChange}) =>
    percentageChange > 0 ? 'rgba(68, 217, 38, 0.15)' : percentageChange < 0 ? 'rgba(235, 72, 99, 0.15)' : 'rgba(156, 156, 156, 0.15)'};
  width: 16px;
  height: 16px;
  border-radius: 3px;
  justify-self: end;
  justify-content: center;
`;
