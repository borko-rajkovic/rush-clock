import { ClockContextType } from "../ClockContextType";
import { calculateEasedOutDate } from "../math-utils/easing";
import { calculateAnalogClock } from "./analog/analog-clock-utils";
import { calculateDigitalClock } from "./digital/digital-clock-utils";

export const calculateClock = (): ClockContextType => {
  const date = new Date();

  const hourStart = new Date().setHours(date.getHours(), 0, 0, 0);
  const hourFinish = hourStart + 60 * 60 * 1000;

  const easedOutDate = calculateEasedOutDate(+date, hourStart, hourFinish);

  const digital = calculateDigitalClock(date);
  const analog = calculateAnalogClock(easedOutDate);

  return { digital, analog };
};
