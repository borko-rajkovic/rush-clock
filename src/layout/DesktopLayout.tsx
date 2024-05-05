import { useContext } from "react";
import { FeaturesContext } from "../context/features-context/FeaturesContext";
import ForkMeOnGithub from "../components/ForkMeOnGithub/ForkMeOnGithub";
import AnalogClock from "../components/AnalogClock/AnalogClock";
import DigitalClock from "../components/DigitalClock/DigitalClock";
import ClockConfiguration from "../components/ClockConfiguration/ClockConfiguration";
import ClockSimulation from "../components/RushClockSimulation/RushClockSimulation";
import CopyLinks from "../components/CopyLinks/CopyLinks";
import HowItWorks from "../components/HowItWorks/HowItWorks";

function DesktopLayout() {
  const { displayDigitalClock } = useContext(FeaturesContext);

  return (
    <section className="clock container">
      <ForkMeOnGithub />
      <div className="title">Rush Clock</div>
      <div className="clock__container grid display-config">
        <div className="clock__content grid">
          <AnalogClock />
          {displayDigitalClock && <DigitalClock />}
        </div>
        <ClockConfiguration />
        <ClockSimulation />
      </div>
      <CopyLinks />
      <HowItWorks />
    </section>
  );
}

export default DesktopLayout;
