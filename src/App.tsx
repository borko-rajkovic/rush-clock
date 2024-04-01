import { useContext } from "react";
import "./App.css";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import RushnessSlider from "./components/RushnessSlider/RushnessSlider";
import ContextClock from "./context/clock-context/ClockContext";
import ContextFeatures, {
  FeaturesContext,
} from "./context/features-context/FeaturesContext";
import { BrowserRouter } from "react-router-dom";
import CopyLinks from "./components/CopyLinks/CopyLinks";

function Content() {
  const { hideAdmin } = useContext(FeaturesContext);

  return (
    <section className="clock container">
      {!hideAdmin && <div className="title">Rush Clock</div>}
      {!hideAdmin && <RushnessSlider />}
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
          <DigitalClock />
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
