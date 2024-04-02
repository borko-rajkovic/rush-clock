import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./DigitalClockFormat.css";

function DigitalClockFormat() {
  const { clock24Type, setClock24Type } = useContext(FeaturesContext);

  return (
    <div className="clock__configuration__digital_clock_format">
      <label>Digital Clock format</label>
      <input
        type="checkbox"
        checked={clock24Type}
        onChange={() => setClock24Type(!clock24Type)}
      />
    </div>
  );
}

export default DigitalClockFormat;
