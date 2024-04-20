import { easeOut } from "./easing-functions/easeOut";
import { mapInRange, normalize } from "./range";

const easingFunction = easeOut;

export const calculateEasedOutDate = (
  date: number,
  easeStart: number,
  easeFinish: number,
  rushCoefficient: number
) => {
  if (date < easeStart || date > easeFinish || easeStart > easeFinish) {
    return new Date(date);
  }

  const currentPosition = normalize(date, easeStart, easeFinish);

  const easedOutNormalized = easingFunction(currentPosition, rushCoefficient);

  const easedOut = mapInRange(easedOutNormalized, 0, 1, easeStart, easeFinish);

  return new Date(easedOut);
};
