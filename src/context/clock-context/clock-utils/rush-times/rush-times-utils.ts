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

let lastUpdateTimestamp = initialDate;

export const updateRushTimes = (
  date: Date,
  setRushTimes: React.Dispatch<SetStateAction<RushTimesConfiguration>>
) => {
  if (lastUpdateTimestamp.getHours() !== new Date().getHours()) {
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
