import { createContext, useState } from "react";
import { FeaturesContextType } from "./FeaturesContextType";

const defaultValues: FeaturesContextType = {
  shadowVisible: false,
  setShadowVisible: () => {},
};

export const FeaturesContext: React.Context<FeaturesContextType> =
  createContext(defaultValues);

const ContextFeatures = ({ children }: { children: React.ReactNode }) => {
  const [shadowVisible, setShadowVisible] = useState(false);

  return (
    <FeaturesContext.Provider value={{ shadowVisible, setShadowVisible }}>
      {children}
    </FeaturesContext.Provider>
  );
};

export default ContextFeatures;
