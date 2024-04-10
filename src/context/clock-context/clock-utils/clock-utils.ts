import { RushTimesConfiguration } from "../../features-context/RushTimesConfiguration";
import { ClockContextType } from "../ClockContextType";
import { calculateEasedOutDate } from "../math-utils/easing";
import { calculateAnalogClock } from "./analog/analog-clock-utils";
import { calculateDigitalClock } from "./digital/digital-clock-utils";

const calculateRushStartAndRushFinish = (rushTimes: RushTimesConfiguration) => {
  switch (rushTimes.rushType) {
    case "hour":
      return {
        rushStart: rushTimes.hourRushTimes.from,
        rushFinish: rushTimes.hourRushTimes.to,
      };
    case "day":
      return {
        rushStart: rushTimes.dayRushTimes.from,
        rushFinish: rushTimes.dayRushTimes.to,
      };
    case "custom":
      return {
        rushStart: rushTimes.customRushTimes.from,
        rushFinish: rushTimes.customRushTimes.to,
      };
    default:
      return {
        rushStart: rushTimes.hourRushTimes.from,
        rushFinish: rushTimes.hourRushTimes.to,
      };
  }
};

export const calculateClock = (
  rushCoefficient: number,
  rushTimes: RushTimesConfiguration,
  date: Date
): ClockContextType => {
  const { rushStart, rushFinish } = calculateRushStartAndRushFinish(rushTimes);

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
