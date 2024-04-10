import { SetStateAction } from "react";
import { RushTimes } from "../../../features-context/FeaturesContextType";
import { floorToSecond } from "../../math-utils/rounding";

const isAlarmTriggered = (rushTimes: RushTimes) => {
  const date = new Date();

  switch (rushTimes.rushType) {
    case "hour":
      return date.getSeconds() === 0 && date.getMinutes() === 0;
    case "day":
      return (
        date.getSeconds() === 0 &&
        date.getMinutes() === 0 &&
        date.getHours() === 0
      );
  }

  const currentDateRounded = floorToSecond(date);
  const customRushTimToRounded = floorToSecond(rushTimes.customRushTimes.to);

  return currentDateRounded === customRushTimToRounded;
};

export const playAlarm = (
  startAlarm: React.Dispatch<SetStateAction<void>>,
  rushTimes: RushTimes
) => {
  const alarmTriggered = isAlarmTriggered(rushTimes);

  if (alarmTriggered) {
    startAlarm();
  }
};