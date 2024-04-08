export const floorToSecond = (input: number | Date) =>
  Math.floor(+input / 1000) * 1000;
