import {ZeroDamagePlayer} from './components/ZeroDamage';
import {latestZveks} from 'src/DATA';

export const calculateGini = (damages: number[]) =>
  damages.reduce((sum, x) => sum + damages.reduce((innerSum, y) => innerSum + Math.abs(x - y), 0), 0) /
  ((2 * damages.length ** 2 * damages.reduce((sum, damage) => sum + damage, 0)) / damages.length);

export const zeroHeaderValues = ['Игрок', 'День'];

export const headerValues = ['Никнейм', 'Урон прошлого ЗВЭК (млрд)', 'Урон последнего ЗВЭК (млрд)', 'Уменьшился на'];

export const zeroDamagePlayers = () =>
  latestZveks.reduce((acc: ZeroDamagePlayer[], {name, info}) => {
    const zeroDays = info[info.length - 1]?.damageByDay.reduce<number[]>((days, damage, idx) => {
      damage === 0 && days.push(idx + 1);
      return days;
    }, []);

    zeroDays.length > 0 && acc.push({name, zeroDays});
    return acc;
  }, []);
