import { AnalogClock } from "../../ClockContextType";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const rotateZ = (degrees: number) => `rotateZ(${degrees}deg)`;

export const calculateAnalogClock = (
  easedDate: Date,
  date: Date
): AnalogClock => {
  const seconds = date.getSeconds(); // + date.getMilliseconds() / 1000;
  const minutes = date.getMinutes();
  const hour = date.getHours();

  const easedSeconds = easedDate.getSeconds();
  const easedMinutes = easedDate.getMinutes();
  const easedHour = easedDate.getHours();

  const secondsTransformDegrees = seconds * 6;
  const minutesTransformDegrees = (easedMinutes + easedSeconds / 60) * 6;
  const hourTransformDegrees = easedHour * 30 + (easedMinutes / 12) * 6;

  const minutesShadowTransformDegrees = (minutes + seconds / 60) * 6;
  const hourShadowTransformDegrees = hour * 30 + (minutes / 12) * 6;

  return {
    secondsTransform: rotateZ(secondsTransformDegrees),
    minutesTransform: rotateZ(minutesTransformDegrees),
    hourTransform: rotateZ(hourTransformDegrees),
    minutesShadowTransform: rotateZ(minutesShadowTransformDegrees),
    hourShadowTransform: rotateZ(hourShadowTransformDegrees),
  };
};
