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
  hourTransform: string;
  minutesTransform: string;
};

export type ClockContextType = {
  digital: DigitalClock;
  analog: AnalogClock;
};
