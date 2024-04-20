import { useContext } from "react";
import {
  calculateClock,
  getRushStartAndRushFinish,
} from "../../context/clock-context/clock-utils/clock-utils";
import { mapInRange } from "../../context/clock-context/math-utils/range";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";
import AnalogSimulationClock from "./AnalogSimulationClock/AnalogSimulationClock";
import "./RushClockSimulation.css";
import { calculateAnalogClock } from "../../context/clock-context/clock-utils/analog/analog-clock-utils";
import { calculateDigitalClock } from "../../context/clock-context/clock-utils/digital/digital-clock-utils";

function ClockSimulation() {
  const {
    rushTimes,
    rushCoefficient,
    simulationClockSliderValue: sliderValue,
    setSimulationClockSliderValue: setSliderValue,
  } = useContext(FeaturesContext);

  const { rushStart, rushFinish } = getRushStartAndRushFinish(rushTimes);

  const simulatedTime = mapInRange(sliderValue, 0, 1, rushStart, rushFinish);
  const simulatedDate = new Date(simulatedTime);

  const regularSimulatedAnalogClock = calculateAnalogClock(
    simulatedDate,
    simulatedDate
  );

  const regularSimulatedDigitalClock = calculateDigitalClock(
    simulatedDate,
    simulatedDate
  );

  const easedSimulatedClock = calculateClock(
    rushCoefficient,
    rushTimes,
    simulatedDate
  );

  return (
    <div className="clock__simulation">
      <div className="clock__simulation__title">Simulation</div>
      <div className="clock__simulation_content">
        <AnalogSimulationClock
          clock={{
            analog: regularSimulatedAnalogClock,
            digital: regularSimulatedDigitalClock,
          }}
        />
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
        <AnalogSimulationClock clock={easedSimulatedClock} />
      </div>
    </div>
  );
}

export default ClockSimulation;
