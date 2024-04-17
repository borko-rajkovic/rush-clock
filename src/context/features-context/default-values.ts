import { ColorTheme } from "../../components/ClockConfiguration/ColorThemeConfiguration/ColorTheme";
import { FeaturesContextType } from "./FeaturesContextType";
import { ALARM_SOUND } from "./alarm-sound";

export const FEATURE_CONTEXT_DEFAULT_VALUES: FeaturesContextType = {
  shadowVisible: false,
  setShadowVisible: () => {},
  clock24Type: true,
  setClock24Type: () => {},
  rushCoefficient: 2,
  setRushCoefficient: () => {},
  hideAdmin: false,
  setHideAdmin: () => {},
  linkHideAdmin: true,
  setLinkHideAdmin: () => {},
  enableShadowClock: true,
  setEnableShadowClock: () => {},
  displayDigitalClock: true,
  setDisplayDigitalClock: () => {},
  rushTimes: {
    rushType: "hour",
    hourRushTimes: {
      from: 0,
      to: 0,
    },
    dayRushTimes: {
      from: 0,
      to: 0,
    },
    customRushTimes: {
      from: 0,
      to: 0,
    },
  },
  setRushTimes: () => {},
  alarm: false,
  setAlarm: () => {},
  alarmRinging: false,
  setAlarmRinging: () => {},
  hueColor: ColorTheme.Blueberry,
  setHueColor: () => {},
  resetConfiguration: () => {},
  alarmSound: ALARM_SOUND,
  startAlarm: () => {},
  stopAlarm: () => {},
  simulationClockSliderValue: 0,
  setSimulationClockSliderValue: () => {},
};
