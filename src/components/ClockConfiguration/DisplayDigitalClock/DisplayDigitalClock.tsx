import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./DisplayDigitalClock.css";

function DisplayDigitalClock() {
  const { displayDigitalClock, setDisplayDigitalClock } =
    useContext(FeaturesContext);

  return (
    <div className="clock__configuration__display_digital_clock">
      <label>Display Digital Clock</label>
      <input
        type="checkbox"
        checked={displayDigitalClock}
        onChange={() => setDisplayDigitalClock(!displayDigitalClock)}
      />
    </div>
  );
}

export default DisplayDigitalClock;
