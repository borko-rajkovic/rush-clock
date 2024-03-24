import { AnalogClock } from "../../ClockContextType";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const calculateAnalogClock = (date: Date): AnalogClock => {
  const seconds = date.getSeconds(); // + date.getMilliseconds() / 1000;
  const minutes = date.getMinutes();
  const hour = date.getHours();

  const secondsTransform = `rotateZ(${seconds * 6}deg)`;
  const minutesTransform = `rotateZ(${(minutes + seconds / 60) * 6}deg)`;
  const hourTransform = `rotateZ(${hour * 30 + (minutes / 12) * 6}deg)`;

  return { secondsTransform, minutesTransform, hourTransform };
};
