import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./DigitalClockFormat.css";

function DigitalClockFormat() {
  const { clock24Type, setClock24Type } = useContext(FeaturesContext);

  return (
    <div className="clock__configuration__digital_clock_format">
      <label>Digital Clock format</label>
      <div className="checkbox_item citem_3">
        <label className="checkbox_wrap">
          <input
            type="checkbox"
            className="checkbox_inp"
            checked={clock24Type}
            onChange={() => setClock24Type(!clock24Type)}
          />
          <span className="checkbox_mark"></span>
        </label>
      </div>
    </div>
  );
}

export default DigitalClockFormat;
