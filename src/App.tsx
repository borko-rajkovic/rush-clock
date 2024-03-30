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

function Content() {
  const { adminVisible } = useContext(FeaturesContext);

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          {adminVisible && <RushnessSlider />}
          <AnalogClock />
          <DigitalClock />
        </div>
      </div>
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
