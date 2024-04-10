import { SetStateAction } from "react";
import {
  RushTimes,
  RushTimesConfiguration,
} from "../../../features-context/RushTimesConfiguration";
import {
  calculateDayRushTimes,
  calculateHourRushTimes,
  initialDate,
} from "../../../initial-date";
import { floorToSecond } from "../../math-utils/rounding";

let lastUpdateTimestamp = initialDate;

export const updateRushTimes = (
  date: Date,
  setRushTimes: React.Dispatch<SetStateAction<RushTimesConfiguration>>
) => {
  if (
    date.getMinutes() === 0 &&
    date.getSeconds() === 0 &&
    floorToSecond(lastUpdateTimestamp) !== floorToSecond(new Date())
  ) {
    lastUpdateTimestamp = new Date();

    const hourRushTimes: RushTimes = calculateHourRushTimes(date);
    const dayRushTimes: RushTimes = calculateDayRushTimes();

    setRushTimes((rushTimes) =>
      Object.assign(
        {},
        { ...rushTimes },
        {
          hourRushTimes,
          dayRushTimes,
        }
      )
    );
  }
};
