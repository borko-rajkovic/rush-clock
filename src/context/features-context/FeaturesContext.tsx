import { createContext, useState } from "react";
import { FeaturesContextType } from "./FeaturesContextType";
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
  const digitalClockType = getParam("digitalClockType");

  const initialRushCoefficient = rushnessQueryParam
    ? Number(rushnessQueryParam)
    : 2;
  const initialHideAdmin = hideAdminQueryParam === "true";
  const initialLinkHideAdmin = hideAdminQueryParam !== "false";
  const initialEnableShadowClock = enableShadowClockQueryParam !== "false";
  const initialDisplayDigitalClock = displayDigitalClockQueryParam !== "false";
  const initialClock24Type = digitalClockType !== "12";

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
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
