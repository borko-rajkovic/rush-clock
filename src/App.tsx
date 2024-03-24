import "./App.css";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import ContextClock from "./context/ClockContext";

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextClock>
            <AnalogClock />
            <DigitalClock />
          </ContextClock>
        </div>
      </div>
    </section>
  );
}

export default App;
