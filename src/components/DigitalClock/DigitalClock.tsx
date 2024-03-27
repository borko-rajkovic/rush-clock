import { useContext } from "react";
import "./DigitalClock.css";
import { ClockContext } from "../../context/clock-context/ClockContext";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";

function DigitalClock() {
  const { digital } = useContext(ClockContext);
  const { clock24Type, setClock24Type } = useContext(FeaturesContext);

  const changeClockType = () => {
    setClock24Type(!clock24Type);
  };

  return (
    <div>
      <div className="clock__text" onClick={changeClockType}>
        <div className="clock__text-hour">{`${
          clock24Type ? digital.hour24 : digital.hour12
        }:`}</div>
        <div className="clock__text-minutes">{digital.minutes}</div>
        {!clock24Type && <div className="clock__text-ampm">{digital.amPm}</div>}
      </div>

      <div className="clock__date">
        <span>{`${digital.day} `}</span>
        <span>{`${digital.month} , `}</span>
        <span>{digital.year}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
