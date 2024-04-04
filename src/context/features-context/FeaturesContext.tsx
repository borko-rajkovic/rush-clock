import { createContext, useState } from "react";
import { FeaturesContextType, RushTimes } from "./FeaturesContextType";
import { useLocation } from "react-router-dom";

const defaultValues: FeaturesContextType = {
  shadowVisible: false,
  setShadowVisible: () => {},
  clock24Type: true,
  setClock24Type: () => {},
  rushCoefficient: 2,
  setRushCoefficient: () => {},
  hideAdmin: false,
  setHideAdmin: () => {},
  linkHideAdmin: false,
  setLinkHideAdmin: () => {},
  enableShadowClock: true,
  setEnableShadowClock: () => {},
  displayDigitalClock: true,
  setDisplayDigitalClock: () => {},
  rushTimes: {
    rushType: "hour",
    customRushTimes: {
      from: 0,
      to: 0,
    },
  },
  setRushTimes: () => {},
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

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
    Number(customRushTimeFromQueryParam) ?? 0;
  const initialcustomRushTimeTo: number =
    Number(customRushTimeToQueryParam) ?? 0;

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
  const [rushTimes, setRushTimes] = useState<RushTimes>({
    rushType: initialrushType,
    customRushTimes: {
      from: initialcustomRushTimeFrom,
      to: initialcustomRushTimeTo,
    },
  });

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
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
