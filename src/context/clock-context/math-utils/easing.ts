import { mapInRange, normalize } from "./range";

const easeOut = (x: number, coefficient = 2): number => {
  return 1 - Math.pow(1 - x, coefficient);
};

export const calculateEasedOutDate = (
  date: number,
  easeStart: number,
  easeFinish: number
) => {
  if (date < easeStart || date > easeFinish) {
    return new Date(date);
  }

  const currentPosition = normalize(date, easeStart, easeFinish);

  const easedOutNormalized = easeOut(currentPosition, 2);

  const easedOut = mapInRange(easedOutNormalized, 0, 1, easeStart, easeFinish);

  return new Date(easedOut);
};
