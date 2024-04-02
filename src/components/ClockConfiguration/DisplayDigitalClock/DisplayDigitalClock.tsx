import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./DisplayDigitalClock.css";

function DisplayDigitalClock() {
  const { displayDigitalClock, setDisplayDigitalClock } =
    useContext(FeaturesContext);

  return (
    <div className="clock__configuration__display_digital_clock">
      <label>Display Digital Clock</label>
      <div className="checkbox_item citem_1">
        <label className="checkbox_wrap">
          <input
            type="checkbox"
            className="checkbox_inp"
            checked={displayDigitalClock}
            onChange={() => setDisplayDigitalClock(!displayDigitalClock)}
          />
          <span className="checkbox_mark"></span>
        </label>
      </div>
    </div>
  );
}

export default DisplayDigitalClock;
