import { useContext } from "react";
import "./App.css";
import "./Tooltip.css";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import ContextClock from "./context/clock-context/ClockContext";
import ContextFeatures, {
  FeaturesContext,
} from "./context/features-context/FeaturesContext";
import { BrowserRouter } from "react-router-dom";
import CopyLinks from "./components/CopyLinks/CopyLinks";
import ClockConfiguration from "./components/ClockConfiguration/ClockConfiguration";
import ForkMeOnGithub from "./components/ForkMeOnGithub/ForkMeOnGithub";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ClockSimulation from "./components/RushClockSimulation/RushClockSimulation";
import ScreenResolutionGuard, { MINIMUM_WIDTH } from "./ScreenResolutionGuard";

function Desktop() {
  const { hideAdmin, displayDigitalClock, hueColor } =
    useContext(FeaturesContext);

  return (
    <section
      className={`clock container ${hideAdmin && "container__fill_height"}`}
    >
      {!hideAdmin && <ForkMeOnGithub />}
      {hideAdmin && (
        <style
          dangerouslySetInnerHTML={{ __html: `body {background-color: unset}` }}
        ></style>
      )}
      <style
        dangerouslySetInnerHTML={{ __html: `:root {--hue-color: ${hueColor}}` }}
      ></style>
      {!hideAdmin && <div className="title">Rush Clock</div>}
      <div
        className={`clock__container grid ${!hideAdmin && "display-config"}`}
      >
        <div className="clock__content grid">
          <AnalogClock />
          {displayDigitalClock && <DigitalClock />}
        </div>
        {!hideAdmin && <ClockConfiguration />}
        {!hideAdmin && <ClockSimulation />}
      </div>
      {!hideAdmin && <CopyLinks />}
      {!hideAdmin && <HowItWorks />}
    </section>
  );
}

function Mobile() {
  return (
    <div className="screen-resolution-guard">
      <div className="screen-resolution-guard__content">
        Minimum supported width for admin&nbsp;is&nbsp;
        <strong>{MINIMUM_WIDTH}</strong>px,&nbsp;right?
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContextFeatures>
        <ContextClock>
          <ScreenResolutionGuard mobile={<Mobile />} desktop={<Desktop />} />
        </ContextClock>
      </ContextFeatures>
    </BrowserRouter>
  );
}

export default App;
