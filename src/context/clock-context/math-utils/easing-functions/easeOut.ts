export const easeOut = (x: number, coefficient = 2): number => {
  return 1 - Math.pow(1 - x, coefficient);
};
