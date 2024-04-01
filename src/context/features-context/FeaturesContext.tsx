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
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const getParam = (param: string) =>
    new URLSearchParams(location.search).get(param);

  const rushnessQueryParam = getParam("rushness");
  const hideAdminQueryParam = getParam("hideAdmin");

  const initialRushCoefficient = rushnessQueryParam
    ? Number(rushnessQueryParam)
    : 2;
  const initialHideAdmin = hideAdminQueryParam === "true";

  const [shadowVisible, setShadowVisible] = useState(false);
  const [clock24Type, setClock24Type] = useState(true);
  const [rushCoefficient, setRushCoefficient] = useState(
    initialRushCoefficient
  );
  const [hideAdmin, setHideAdmin] = useState(initialHideAdmin);

  return (
    <FeaturesContext.Provider
      value={{
        shadowVisible,
        setShadowVisible,
        clock24Type,
        setClock24Type,
        rushCoefficient,
        setRushCoefficient,
        hideAdmin: hideAdmin,
        setHideAdmin: setHideAdmin,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
