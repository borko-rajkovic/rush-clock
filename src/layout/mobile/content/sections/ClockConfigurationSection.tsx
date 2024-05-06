import AlarmConfiguration from "../../../../components/ClockConfiguration/AlarmConfiguration/AlarmConfiguration";
import ColorThemeConfiguration from "../../../../components/ClockConfiguration/ColorThemeConfiguration/ColorThemeConfiguration";
import DigitalClockFormat from "../../../../components/ClockConfiguration/DigitalClockFormat/DigitalClockFormat";
import DisplayDigitalClock from "../../../../components/ClockConfiguration/DisplayDigitalClock/DisplayDigitalClock";
import EnableShadowClock from "../../../../components/ClockConfiguration/EnableShadowClock/EnableShadowClock";
import HideAdminPanel from "../../../../components/ClockConfiguration/HideAdminPanel/HideAdminPanel";
import ResetConfiguration from "../../../../components/ClockConfiguration/ResetConfiguration/ResetConfiguration";
import RushTypeConfiguration from "../../../../components/ClockConfiguration/RushTypeConfiguration/RushTypeConfiguration";
import RushnessSlider from "../../../../components/ClockConfiguration/RushnessSlider/RushnessSlider";
import "./ClockConfigurationSection.css";

function ClockConfigurationSection() {
  return (
    <div className="clock_configuration_section">
      <RushnessSlider />
      <RushTypeConfiguration mobile />
      <EnableShadowClock />
      <HideAdminPanel />
      <DisplayDigitalClock />
      <DigitalClockFormat />
      <AlarmConfiguration />
      <ColorThemeConfiguration />
      <ResetConfiguration />
    </div>
  );
}

export default ClockConfigurationSection;
