import { RushTimes } from "../../features-context/FeaturesContextType";
import { ClockContextType } from "../ClockContextType";
import { calculateEasedOutDate } from "../math-utils/easing";
import { calculateAnalogClock } from "./analog/analog-clock-utils";
import { calculateDigitalClock } from "./digital/digital-clock-utils";

const calculateHourRushStartAndFinish = (date: Date) => {
  const rushStart = new Date().setHours(date.getHours(), 0, 0, 0);
  const rushFinish = rushStart + 60 * 60 * 1000;

  return { rushStart, rushFinish };
};

const calculateDayRushStartAndFinish = () => {
  const rushStart = new Date().setHours(0, 0, 0, 0);
  const rushFinish = rushStart + 24 * 60 * 60 * 1000;

  return { rushStart, rushFinish };
};

const calculateCustomRushStartAndFinish = (rushTimes: RushTimes) => {
  const rushStart = rushTimes.customRushTimes.from;
  const rushFinish = rushTimes.customRushTimes.to;

  return { rushStart, rushFinish };
};

const calculateRushStartAndRushFinish = (date: Date, rushTimes: RushTimes) => {
  switch (rushTimes.rushType) {
    case "hour":
      return calculateHourRushStartAndFinish(date);
    case "day":
      return calculateDayRushStartAndFinish();
    case "custom":
      return calculateCustomRushStartAndFinish(rushTimes);
    default:
      return calculateHourRushStartAndFinish(date);
  }
};

export const calculateClock = (
  rushCoefficient: number,
  rushTimes: RushTimes,
  date: Date
): ClockContextType => {
  const { rushStart, rushFinish } = calculateRushStartAndRushFinish(
    date,
    rushTimes
  );

  const easedOutDate = calculateEasedOutDate(
    +date,
    rushStart,
    rushFinish,
    rushCoefficient
  );

  const digital = calculateDigitalClock(date);
  const analog = calculateAnalogClock(easedOutDate, date);

  return { digital, analog };
};
