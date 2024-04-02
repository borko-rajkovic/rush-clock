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

function Content() {
  const { hideAdmin, displayDigitalClock } = useContext(FeaturesContext);

  return (
    <section className="clock container">
      {!hideAdmin && <div className="title">Rush Clock</div>}
      <div
        className={`clock__container grid ${!hideAdmin && "display-config"}`}
      >
        {!hideAdmin && <ClockConfiguration />}
        <div className="clock__content grid">
          <AnalogClock />
          {(!hideAdmin || displayDigitalClock) && <DigitalClock />}
        </div>
      </div>
      {!hideAdmin && <CopyLinks />}
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ContextFeatures>
        <ContextClock>
          <Content />
        </ContextClock>
      </ContextFeatures>
    </BrowserRouter>
  );
}

export default App;
