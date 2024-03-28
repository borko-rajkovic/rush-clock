import { createContext, useState } from "react";
import { FeaturesContextType } from "./FeaturesContextType";

const defaultValues: FeaturesContextType = {
  shadowVisible: false,
  setShadowVisible: () => {},
  clock24Type: true,
  setClock24Type: () => {},
  rushCoefficient: 2,
  setRushCoefficient: () => {},
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const [shadowVisible, setShadowVisible] = useState(false);
  const [clock24Type, setClock24Type] = useState(true);
  const [rushCoefficient, setRushCoefficient] = useState(2);

  return (
    <FeaturesContext.Provider
      value={{
        shadowVisible,
        setShadowVisible,
        clock24Type,
        setClock24Type,
        rushCoefficient,
        setRushCoefficient,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
