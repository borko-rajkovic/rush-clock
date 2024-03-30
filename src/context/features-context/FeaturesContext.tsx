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
  adminVisible: true,
  setAdminVisible: () => {},
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const getParam = (param: string) =>
    new URLSearchParams(location.search).get(param);

  const rushnessQueryParam = getParam("rushness");
  const adminVisibleQueryParam = getParam("adminVisible");

  const initialRushCoefficient = rushnessQueryParam
    ? Number(rushnessQueryParam)
    : 2;
  const initialAdminVisible = adminVisibleQueryParam === "false" ? false : true;

  const [shadowVisible, setShadowVisible] = useState(false);
  const [clock24Type, setClock24Type] = useState(true);
  const [rushCoefficient, setRushCoefficient] = useState(
    initialRushCoefficient
  );
  const [adminVisible, setAdminVisible] = useState(initialAdminVisible);

  return (
    <FeaturesContext.Provider
      value={{
        shadowVisible,
        setShadowVisible,
        clock24Type,
        setClock24Type,
        rushCoefficient,
        setRushCoefficient,
        adminVisible,
        setAdminVisible,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
