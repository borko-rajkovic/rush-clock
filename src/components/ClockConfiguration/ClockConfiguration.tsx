import EnableShadowClock from "./EnableShadowClock/EnableShadowClock";
import RushnessSlider from "./RushnessSlider/RushnessSlider";
import "./ClockConfiguration.css";
import DigitalClockFormat from "./DigitalClockFormat/DigitalClockFormat";
import DisplayDigitalClock from "./DisplayDigitalClock/DisplayDigitalClock";
import HideAdminPanel from "./HideAdminPanel/HideAdminPanel";
import RushTypeConfiguration from "./RushTypeConfiguration/RushTypeConfiguration";
import AlarmConfiguration from "./AlarmConfiguration/AlarmConfiguration";
import ColorThemeConfiguration from "./ColorThemeConfiguration/ColorThemeConfiguration";

function ClockConfiguration() {
  return (
    <div className="clock__configuration">
      <div className="clock__configuration__title">Configuration</div>
      <div></div>
      <RushnessSlider />
      <EnableShadowClock />
      <HideAdminPanel />
      <DisplayDigitalClock />
      <DigitalClockFormat />
      <AlarmConfiguration />
      <ColorThemeConfiguration />
      <RushTypeConfiguration />
    </div>
  );
}

export default ClockConfiguration;
