import { ClockContextType } from "../../../context/clock-context/ClockContextType";
import "./AnalogSimulationClock.css";

function AnalogSimulationClock({ clock }: { clock: ClockContextType }) {
  const { minutesTransform, hourTransform } = clock.analog;

  return (
    <div className="clock__simulation__analog_clock">
      <div className="outer-clock-face">
        <div className="marking marking-one"></div>
        <div className="marking marking-two"></div>
        <div className="marking marking-three"></div>
        <div className="marking marking-four"></div>
        <div className="inner-clock-face">
          <div
            className="clock__simulation__hour_min"
            style={{ transform: minutesTransform }}
          ></div>
          <div
            className="clock__simulation__hour_hand"
            style={{ transform: hourTransform }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AnalogSimulationClock;
