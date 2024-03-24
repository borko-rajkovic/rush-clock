import { useContext } from "react";
import "./DigitalClock.css";
import { ClockContext } from "../../context/ClockContext";

function DigitalClock() {
  const { digital } = useContext(ClockContext);

  return (
    <div>
      <div className="clock__text">
        <div className="clock__text-hour">{`${digital.hour12}:`}</div>
        <div className="clock__text-minutes">{digital.minutes}</div>
        <div className="clock__text-ampm">{digital.amPm}</div>
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
