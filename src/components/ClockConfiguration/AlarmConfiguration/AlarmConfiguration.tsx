import { useContext, useEffect, useState } from "react";
import "./AlarmConfiguration.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import { CiPlay1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";

function AlarmConfiguration() {
  const { alarm, setAlarm, alarmSound } = useContext(FeaturesContext);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      alarmSound.play();
      alarmSound.loop = true;
    } else {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }
  }, [alarmSound, play, setAlarm]);

  return (
    <div className="clock__configuration__alarm_configuration">
      <div className="enable-alarm-sound-title-button-wrapper">
        <label>
          Enable{" "}
          <abbr
            data-tooltip="When enabled, at the end of the Rush period you will be notified by the bell sound"
            title=""
          >
            alarm
          </abbr>{" "}
          sound
        </label>
        <label
          className="play-alarm-sound-button"
          onClick={() => setPlay(!play)}
        >
          {!play ? <CiPlay1 /> : <CiStop1 />}
        </label>
      </div>
      <div className="checkbox_item citem_1">
        <label className="checkbox_wrap">
          <input
            type="checkbox"
            className="checkbox_inp"
            checked={alarm}
            onChange={() => setAlarm(!alarm)}
          />
          <span className="checkbox_mark"></span>
        </label>
      </div>
    </div>
  );
}

export default AlarmConfiguration;
