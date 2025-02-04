import en from './localization/EN';
import uk from './localization/UK';
import ru from './localization/RU';
import {ZeroDamagePlayer} from './components/ZeroDamage';
import {LocalizationObjProps} from 'services/GlobalUtils';
import {latestZveks} from 'src/DATA';

export interface TopPlayerData {
  date: string;
  topPlayers: string[];
  topDamagePercentage: number;
}

const localizationObj = {en, uk, ru} as LocalizationObjProps;
export const localization = (language: string) => localizationObj[language];

export const calculateGini = (damages: number[]) =>
  damages.reduce((sum, x) => sum + damages.reduce((innerSum, y) => innerSum + Math.abs(x - y), 0), 0) /
  ((2 * damages.length ** 2 * damages.reduce((sum, damage) => sum + damage, 0)) / damages.length);

export const zeroDamagePlayers = () =>
  latestZveks.reduce((acc: ZeroDamagePlayer[], {name, info}) => {
    const zeroDays = info[info.length - 1]?.damageByDay.reduce<number[]>((days, damage, idx) => {
      damage === 0 && days.push(idx + 1);
      return days;
    }, []);

    zeroDays.length > 0 && acc.push({name, zeroDays});
    return acc;
  }, []);

export const calculateTopPlayersData = (): TopPlayerData[] =>
  latestZveks[0].info
    .map(({date, guildTotal}, index) => {
      if (guildTotal === 0) return null;

      const topPlayers = latestZveks
        .map(({info, name}) => ({
          name,
          damage: info[index] ? info[index].damage : 0,
        }))
        .sort((a, b) => b.damage - a.damage)
        .slice(0, 3);
      const topDamageSum = topPlayers.reduce((sum, {damage}) => sum + damage, 0);
      const topDamagePercentage = (topDamageSum / guildTotal) * 100;

      return {
        date,
        topPlayers: topPlayers.map(({name}) => name),
        topDamagePercentage,
      };
    })
    .filter((item) => item !== null);
