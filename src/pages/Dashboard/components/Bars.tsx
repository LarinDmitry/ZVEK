import React, {useMemo} from 'react';
import styled from 'styled-components';
import {useAppSelector} from 'services/hooks';
import {selectUserConfiguration} from 'store/userSlice';
import {useGuildData, globalLocalization} from 'services/GlobalUtils';
import {localization} from '../DashboardUtils';
import {latestZveks, guildRate, newbies} from 'src/DATA';
import {font_body_1_bold} from 'theme/fonts';

interface PlayerData {
  name: string;
  damageLastZvek: number;
  damagePreviousZvek: number;
  percentageChange: number | null;
}

const Bars = () => {
  console.log('Bars');
  const guildData = useGuildData();
  const {language} = useAppSelector(selectUserConfiguration);

  const {BY} = localization(language);
  const {NO_DATA, GROW, GUILD_RATING, NEWBIES} = globalLocalization(language);

  const changeText =
    guildData[2].percentageChange === null
      ? `${NO_DATA}`
      : `${guildData[2].percentageChange > 0 ? '>' : '<'} ${Math.abs(guildData[2].percentageChange).toFixed(2)}%`;

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
        acc = acc.slice(0, 3);

        return acc;
      }, []),
    []
  );

  const growIcon = (
    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  const decreaseIcon = (
    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
        fill="currentColor"
      ></path>
    </svg>
  );

  return (
    <BarsDiv>
      <ZvekChange>
        <NumDiv>{(guildData[2].guildTotal / 1e12).toFixed(0)} T</NumDiv>
        <StyledDiv percentageChange={guildData[2].percentageChange ?? 0}>{changeText}</StyledDiv>
        <StyledDiv percentageChange={guildData[2].percentageChange ?? 0}>
          {(guildData[2].percentageChange ?? 0) > 0 ? growIcon : decreaseIcon}
        </StyledDiv>
        <StyledText>{GROW}</StyledText>
      </ZvekChange>

      <TopPlayers>
        {playerData.map(({name, percentageChange}) => {
          return (
            <TopPlayersDiv>
              <div>{name}</div>
              <StyledDiv percentageChange={percentageChange!}>
                &gt; {BY} {Math.abs(percentageChange!).toFixed(1)}%
              </StyledDiv>
            </TopPlayersDiv>
          );
        })}
      </TopPlayers>

      <GuildRating>
        <ChangeText value={guildRate[1] - guildRate[2]}>{guildRate[2]}</ChangeText>
        <ChangeText value={guildRate[1] - guildRate[2]}>({guildRate[2] - guildRate[1]})</ChangeText>
        <ChangeText value={guildRate[1] - guildRate[2]}>
          {guildRate[1] - guildRate[2] > 0 ? growIcon : decreaseIcon}
        </ChangeText>
        <StyledText>{GUILD_RATING}</StyledText>
      </GuildRating>

      <Newbies>
        <NewbiesDiv>{newbies[2]}</NewbiesDiv>
        <StyledText>{NEWBIES}</StyledText>
      </Newbies>
    </BarsDiv>
  );
};

export default Bars;

const BarsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-gap: 1rem;
`;

const ZvekChange = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  justify-content: center;
`;

const StyledText = styled.div`
  width: 100%;
`;

const NumDiv = styled.div`
  ${font_body_1_bold};
`;

const TopPlayers = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0 0.5rem 1rem;
  margin: 1rem;
`;

const TopPlayersDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 1px;
`;

const GuildRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  justify-content: center;
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
  ${font_body_1_bold};
`;

const Newbies = styled.div`
  border-radius: 6px;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 0 0 1rem;
  margin: 1rem;
  text-align: center;
`;

const NewbiesDiv = styled.div`
  color: ${({theme}) => theme.colors.green100};
  ${font_body_1_bold};
  margin-bottom: 0.5rem;
`;

const StyledDiv = styled.div<{percentageChange: number}>`
  color: ${({percentageChange, theme}) => (percentageChange > 0 ? theme.colors.green100 : theme.colors.red100)};
`;
