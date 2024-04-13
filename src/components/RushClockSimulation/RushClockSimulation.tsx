import { useContext, useState } from "react";
import "./RushClockSimulation.css";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";
import {
  calculateClock,
  getRushStartAndRushFinish,
} from "../../context/clock-context/clock-utils/clock-utils";
import { numberToCustomDateString } from "../../context/clock-context/clock-utils/moment-utils/moment-utils";
import { mapInRange } from "../../context/clock-context/math-utils/range";

function ClockSimulation() {
  const { rushTimes, rushCoefficient } = useContext(FeaturesContext);
  const [sliderValue, setSliderValue] = useState(0);

  const { rushStart, rushFinish } = getRushStartAndRushFinish(rushTimes);

  const simulatedTime = mapInRange(sliderValue, 0, 1, rushStart, rushFinish);

  const easedSimulatedTime = calculateClock(
    rushCoefficient,
    rushTimes,
    new Date(simulatedTime)
  );

  const regularClock = numberToCustomDateString(simulatedTime);
  const rushClock = numberToCustomDateString(
    +easedSimulatedTime.digital.easedDate
  );

  return (
    <div className="clock__simulation">
      <div className="clock__simulation__title">Rush Clock Simulation</div>
      <div className="clock__simulation_content">
        <div>Regular clock: {regularClock}</div>
        <input
          id="clockSimulationSlider"
          type="range"
          className="range-style"
          min={0}
          max={1}
          step={0.001}
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
        ></input>
        <div>Rush Clock: {rushClock}</div>
      </div>
    </div>
  );
}

export default ClockSimulation;
