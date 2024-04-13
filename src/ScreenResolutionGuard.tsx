import { useContext } from "react";
import useWindowDimensions from "./hooks/use-window-dimensions-hook";
import { FeaturesContext } from "./context/features-context/FeaturesContext";

const MINIMUM_WIDTH = 1024;

const ScreenResolutionGuard = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowDimensions();
  const { hideAdmin } = useContext(FeaturesContext);

  return !hideAdmin && width < MINIMUM_WIDTH ? (
    <div className="screen-resolution-guard">
      <div className="screen-resolution-guard__content">
        Minimum supported width for admin&nbsp;is&nbsp;
        <strong>{MINIMUM_WIDTH}</strong>px
      </div>
    </div>
  ) : (
    children
  );
};

export default ScreenResolutionGuard;
