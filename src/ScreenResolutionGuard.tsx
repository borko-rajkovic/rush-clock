import { useContext } from "react";
import useWindowDimensions from "./hooks/use-window-dimensions-hook";
import { FeaturesContext } from "./context/features-context/FeaturesContext";

export const MINIMUM_WIDTH = 1024;

const ScreenResolutionGuard = ({
  desktop,
  mobile,
}: {
  desktop: React.ReactNode;
  mobile: React.ReactNode;
}) => {
  const { width } = useWindowDimensions();
  const { hideAdmin } = useContext(FeaturesContext);

  return !hideAdmin && width < MINIMUM_WIDTH ? mobile : desktop;
};

export default ScreenResolutionGuard;
