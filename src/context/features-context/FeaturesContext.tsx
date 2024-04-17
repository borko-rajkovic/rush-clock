import { createContext, useState } from "react";
import { FeaturesContextType } from "./FeaturesContextType";
import { RushTimesConfiguration } from "./RushTimesConfiguration";
import { useLocation } from "react-router-dom";
import {
  calculateDayRushTimes,
  calculateHourRushTimes,
  initialDate,
} from "../initial-date";
import { FEATURE_CONTEXT_DEFAULT_VALUES } from "./default-values";
import { ALARM_SOUND } from "./alarm-sound";

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(FEATURE_CONTEXT_DEFAULT_VALUES);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const getParam = (param: string) =>
    new URLSearchParams(location.search).get(param);

  const rushnessQueryParam = getParam("rushness");
  const hideAdminQueryParam = getParam("hideAdmin");
  const enableShadowClockQueryParam = getParam("enableShadowClock");
  const displayDigitalClockQueryParam = getParam("displayDigitalClock");
  const digitalClockTypeQueryParam = getParam("digitalClockType");
  const rushTypeQueryParam = getParam("rushType");
  const customRushTimeFromQueryParam = getParam("customRushTimeFrom");
  const customRushTimeToQueryParam = getParam("customRushTimeTo");
  const alarmQueryParam = getParam("alarm");
  const hueColorQueryParam = getParam("hueColor");

  const initialRushCoefficient = rushnessQueryParam
    ? Number(rushnessQueryParam)
    : 2;
  const initialHideAdmin = hideAdminQueryParam === "true";
  const initialLinkHideAdmin = hideAdminQueryParam !== "false";
  const initialEnableShadowClock = enableShadowClockQueryParam !== "false";
  const initialDisplayDigitalClock = displayDigitalClockQueryParam !== "false";
  const initialClock24Type = digitalClockTypeQueryParam !== "12";
  const initialrushType: "hour" | "day" | "custom" =
    (rushTypeQueryParam as "hour" | "day" | "custom") ?? "hour";
  const initialcustomRushTimeFrom: number =
    Number(customRushTimeFromQueryParam) || +initialDate;
  const initialcustomRushTimeTo: number =
    Number(customRushTimeToQueryParam) || +initialDate + 60 * 60 * 1000;
  const initialAlarm = alarmQueryParam === "true";
  const initialHueColor = hueColorQueryParam ? Number(hueColorQueryParam) : 240;

  const [shadowVisible, setShadowVisible] = useState(false);
  const [clock24Type, setClock24Type] = useState(initialClock24Type);
  const [rushCoefficient, setRushCoefficient] = useState(
    initialRushCoefficient
  );
  const [hideAdmin, setHideAdmin] = useState(initialHideAdmin);
  const [linkHideAdmin, setLinkHideAdmin] = useState(initialLinkHideAdmin);
  const [enableShadowClock, setEnableShadowClock] = useState(
    initialEnableShadowClock
  );
  const [displayDigitalClock, setDisplayDigitalClock] = useState(
    initialDisplayDigitalClock
  );
  const [rushTimes, setRushTimes] = useState<RushTimesConfiguration>({
    rushType: initialrushType,
    hourRushTimes: calculateHourRushTimes(),
    dayRushTimes: calculateDayRushTimes(),
    customRushTimes: {
      from: initialcustomRushTimeFrom,
      to: initialcustomRushTimeTo,
    },
  });
  const [alarm, setAlarm] = useState(initialAlarm);
  const [alarmRinging, setAlarmRinging] = useState(false);
  const [hueColor, setHueColor] = useState(initialHueColor);
  const [simulationClockSliderValue, setSimulationClockSliderValue] =
    useState(0);

  const startAlarm = () => {
    if (!alarm) {
      return;
    }

    ALARM_SOUND.play();
    ALARM_SOUND.onended = function () {
      setAlarmRinging(false);
    };
    setAlarmRinging(true);
  };

  const stopAlarm = () => {
    ALARM_SOUND.pause();
    ALARM_SOUND.currentTime = 0;
    setAlarmRinging(false);
  };

  const resetConfiguration = () => {
    setShadowVisible(FEATURE_CONTEXT_DEFAULT_VALUES.shadowVisible);
    setClock24Type(FEATURE_CONTEXT_DEFAULT_VALUES.clock24Type);
    setRushCoefficient(FEATURE_CONTEXT_DEFAULT_VALUES.rushCoefficient);
    setHideAdmin(FEATURE_CONTEXT_DEFAULT_VALUES.hideAdmin);
    setLinkHideAdmin(FEATURE_CONTEXT_DEFAULT_VALUES.linkHideAdmin);
    setEnableShadowClock(FEATURE_CONTEXT_DEFAULT_VALUES.enableShadowClock);
    setDisplayDigitalClock(FEATURE_CONTEXT_DEFAULT_VALUES.displayDigitalClock);
    setRushTimes(rushTimes);
    setAlarm(FEATURE_CONTEXT_DEFAULT_VALUES.alarm);
    setAlarmRinging(FEATURE_CONTEXT_DEFAULT_VALUES.alarmRinging);
    setHueColor(FEATURE_CONTEXT_DEFAULT_VALUES.hueColor);
    setSimulationClockSliderValue(
      FEATURE_CONTEXT_DEFAULT_VALUES.simulationClockSliderValue
    );
  };

  return (
    <FeaturesContext.Provider
      value={{
        shadowVisible,
        setShadowVisible,
        clock24Type,
        setClock24Type,
        rushCoefficient,
        setRushCoefficient,
        hideAdmin,
        setHideAdmin,
        enableShadowClock,
        setEnableShadowClock,
        linkHideAdmin,
        setLinkHideAdmin,
        displayDigitalClock,
        setDisplayDigitalClock,
        rushTimes,
        setRushTimes,
        alarm,
        setAlarm,
        alarmRinging,
        setAlarmRinging,
        hueColor,
        setHueColor,
        resetConfiguration,
        alarmSound: ALARM_SOUND,
        startAlarm,
        stopAlarm,
        simulationClockSliderValue,
        setSimulationClockSliderValue,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
