export type DigitalClock = {
  seconds: string;
  minutes: string;
  hour12: string;
  hour24: string;
  amPm: string;
  day: string;
  month: string;
  year: string;
};

export type AnalogClock = {
  secondsTransform: string;
  minutesTransform: string;
  hourTransform: string;
  minutesShadowTransform: string;
  hourShadowTransform: string;
};

export type ClockContextType = {
  digital: DigitalClock;
  analog: AnalogClock;
};
