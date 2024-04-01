import RushnessSlider from "../RushnessSlider/RushnessSlider";
import "./ClockConfiguration.css";

function ClockConfiguration() {
  return (
    <div className="clock__configuration">
      <div className="clock__configuration__title">Configuration</div>
      <RushnessSlider />
    </div>
  );
}

export default ClockConfiguration;
