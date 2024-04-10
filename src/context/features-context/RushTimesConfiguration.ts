export type RushTimes = {
  from: number;
  to: number;
};

export type RushTimesConfiguration = {
  rushType: "hour" | "day" | "custom";
  hourRushTimes: RushTimes;
  dayRushTimes: RushTimes;
  customRushTimes: RushTimes;
};
