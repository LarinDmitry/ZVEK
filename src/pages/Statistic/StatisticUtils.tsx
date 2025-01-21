export const calculateGini = (damages: number[]) =>
  damages.reduce((sum, x) => sum + damages.reduce((innerSum, y) => innerSum + Math.abs(x - y), 0), 0) /
  ((2 * damages.length ** 2 * damages.reduce((sum, damage) => sum + damage, 0)) / damages.length);
