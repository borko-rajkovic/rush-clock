export type RushTimes = {
  rushType: "hour" | "day" | "custom";
  customRushTimes: {
    from: number;
    to: number;
  };
};

export type FeaturesContextType = {
  shadowVisible: boolean;
  setShadowVisible: React.Dispatch<React.SetStateAction<boolean>>;
  clock24Type: boolean;
  setClock24Type: React.Dispatch<React.SetStateAction<boolean>>;
  rushCoefficient: number;
  setRushCoefficient: React.Dispatch<React.SetStateAction<number>>;
  hideAdmin: boolean;
  setHideAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  enableShadowClock: boolean;
  setEnableShadowClock: React.Dispatch<React.SetStateAction<boolean>>;
  linkHideAdmin: boolean;
  setLinkHideAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  displayDigitalClock: boolean;
  setDisplayDigitalClock: React.Dispatch<React.SetStateAction<boolean>>;
  rushTimes: RushTimes;
  setRushTimes: React.Dispatch<React.SetStateAction<RushTimes>>;
  alarm: boolean;
  setAlarm: React.Dispatch<React.SetStateAction<boolean>>;
  alarmRinging: boolean;
  setAlarmRinging: React.Dispatch<React.SetStateAction<boolean>>;
  hueColor: number;
  setHueColor: React.Dispatch<React.SetStateAction<number>>;
  resetConfiguration: React.Dispatch<React.SetStateAction<void>>;
  alarmSound: HTMLAudioElement;
};
