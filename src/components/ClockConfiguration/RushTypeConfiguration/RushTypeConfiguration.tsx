import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import CustomRushTypeConfiguration from "./CustomRushTypeConfiguration/CustomRushTypeConfiguration";
import "./RushTypeConfiguration.css";

function RushTypeConfiguration() {
  const { rushTimes, setRushTimes } = useContext(FeaturesContext);

  const rushType = rushTimes.rushType;

  return (
    <>
      <div className="rush_clock_type">Rush Clock Type</div>
      <div className="tabs">
        <input
          className="tabs__input"
          name="tabs"
          type="radio"
          id="hour"
          checked={rushType === "hour"}
          onChange={() =>
            setRushTimes((rushType) =>
              Object.assign({ ...rushType }, { rushType: "hour" })
            )
          }
        />
        <label className="tabs__label" htmlFor="hour">
          Hourly
        </label>
        <div className="tabs__panel">
          <h1>Hourly Rush Clock</h1>
          <p>Default Rush Clock type.</p>
          <p>
            When selected, clock will rush from the beginning of the current
            hour until the end of the current hour.
          </p>
          <p>It will repeat every hour.</p>
        </div>
        <input
          className="tabs__input"
          name="tabs"
          type="radio"
          id="day"
          checked={rushType === "day"}
          onChange={() =>
            setRushTimes((rushType) =>
              Object.assign({ ...rushType }, { rushType: "day" })
            )
          }
        />
        <label className="tabs__label" htmlFor="day">
          Daily
        </label>
        <div className="tabs__panel">
          <h1>Daily Rush Clock</h1>
          <p>
            Similar to <strong>Hourly Rush Clock</strong>, when selected clock
            will rush from the beginning of the current day until the end of the
            current day.
          </p>
          <p>It will repeat every day.</p>
        </div>
        <input
          className="tabs__input"
          name="tabs"
          type="radio"
          id="custom"
          checked={rushType === "custom"}
          onChange={() =>
            setRushTimes((rushType) =>
              Object.assign({ ...rushType }, { rushType: "custom" })
            )
          }
        />
        <label className="tabs__label" htmlFor="custom">
          Custom
        </label>
        <div className="tabs__panel">
          <CustomRushTypeConfiguration
            rushTimes={rushTimes}
            setRushTimes={setRushTimes}
          />
        </div>
      </div>
    </>
  );
}

export default RushTypeConfiguration;
