import { createContext, useState } from "react";
import { FeaturesContextType } from "./FeaturesContextType";

const defaultValues: FeaturesContextType = {
  shadowVisible: false,
  setShadowVisible: () => {},
  clock24Type: true,
  setClock24Type: () => {},
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const [shadowVisible, setShadowVisible] = useState(false);
  const [clock24Type, setClock24Type] = useState(true);

  return (
    <FeaturesContext.Provider
      value={{ shadowVisible, setShadowVisible, clock24Type, setClock24Type }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
