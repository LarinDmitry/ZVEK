export interface DamageByDayProps {
  date: string;
  damage: number;
}

export interface TransformedDataItemProps {
  date: string;
  [key: string]: number | string;
}
