import "./App.css";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import ContextClock from "./context/clock-context/ClockContext";
import ContextFeatures from "./context/features-context/FeaturesContext";

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextFeatures>
            <ContextClock>
              <AnalogClock />
              <DigitalClock />
            </ContextClock>
          </ContextFeatures>
        </div>
      </div>
    </section>
  );
}

export default App;
