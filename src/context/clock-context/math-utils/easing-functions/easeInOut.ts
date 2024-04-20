export const easeInOut = (x: number, coefficient = 2): number => {
  return x < 0.5
    ? 2 * Math.pow(x, coefficient)
    : 1 - Math.pow(-2 * x + 2, coefficient) / 2;
};
