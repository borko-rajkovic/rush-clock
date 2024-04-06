import { useContext } from "react";
import "./AnalogClock.css";
import { ClockContext } from "../../context/clock-context/ClockContext";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";
import { FcAlarmClock } from "react-icons/fc";

function AnalogClock() {
  const {
    analog: {
      secondsTransform,
      minutesTransform,
      hourTransform,
      minutesShadowTransform,
      hourShadowTransform,
    },
  } = useContext(ClockContext);

  const {
    shadowVisible,
    setShadowVisible,
    enableShadowClock,
    alarm,
    alarmRinging,
  } = useContext(FeaturesContext);

  return (
    <div className="clock__circle">
      <FcAlarmClock
        className={`alarm-icon ${alarm && "alarm-active"} ${
          alarmRinging && "alarm-ringing"
        }`}
      />
      <div className="clock__twelve"></div>
      <div className="clock__three"></div>
      <div className="clock__six"></div>
      <div className="clock__nine"></div>

      <div
        className={`clock__rounder ${
          enableShadowClock && shadowVisible && "clock_rounder__shadow_visible"
        }`}
        onClick={() => setShadowVisible(!shadowVisible)}
      ></div>

      <div className="clock__letters"></div>

      {enableShadowClock && shadowVisible && (
        <>
          <div
            style={{
              transform: minutesShadowTransform,
            }}
            className="clock__minutes shadow"
          ></div>
          <div
            className="clock__hour shadow"
            style={{
              transform: hourShadowTransform,
            }}
          ></div>
        </>
      )}
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
