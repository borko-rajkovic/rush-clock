import { DigitalClock } from "../../ClockContextType";
import { months } from "./months";

const calculateHour12 = (date: Date) => {
  let hour = date.getHours() % 12;

  if (hour === 0) {
    hour = 12;
  }

  return hour.toString().padStart(2, "0");
};

export const calculateDigitalClock = (
  easedDate: Date,
  date: Date
): DigitalClock => {
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const hour12 = calculateHour12(date);
  const hour24 = date.getHours().toString().padStart(2, "0");
  const amPm = date.getHours() >= 12 ? "PM" : "AM";
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString();

  return {
    easedDate,
    date,
    seconds,
    minutes,
    hour12,
    hour24,
    amPm,
    day,
    month,
    year,
  };
};
