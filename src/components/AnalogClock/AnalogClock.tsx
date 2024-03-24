import { useContext } from "react";
import "./AnalogClock.css";
import { ClockContext } from "../../context/ClockContext";

function AnalogClock() {
  const {
    analog: { minutesTransform, hourTransform },
  } = useContext(ClockContext);

  const date = new Date();

  const seconds = date.getSeconds();

  const secondsTransform = `rotateZ(${seconds * 6}deg)`;

  return (
    <div className="clock__circle">
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div
        className="clock__seconds"
        style={{ transform: secondsTransform }}
      ></div>
      <div
        style={{ transform: minutesTransform }}
        className="clock__minutes"
      ></div>
      <div className="clock__hour" style={{ transform: hourTransform }}></div>
    </div>
  );
}

export default AnalogClock;
