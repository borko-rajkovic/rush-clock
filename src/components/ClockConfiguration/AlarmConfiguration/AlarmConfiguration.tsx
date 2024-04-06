import { useContext } from "react";
import "./AlarmConfiguration.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function AlarmConfiguration() {
  const { alarm, setAlarm } = useContext(FeaturesContext);

  return (
    <div className="clock__configuration__alarm_configuration">
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
