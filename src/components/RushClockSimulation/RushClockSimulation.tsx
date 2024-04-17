import { useContext } from "react";
import {
  calculateClock,
  getRushStartAndRushFinish,
} from "../../context/clock-context/clock-utils/clock-utils";
import { mapInRange } from "../../context/clock-context/math-utils/range";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";
import AnalogSimulationClock from "./AnalogSimulationClock/AnalogSimulationClock";
import "./RushClockSimulation.css";

function ClockSimulation() {
  const {
    rushTimes,
    rushCoefficient,
    simulationClockSliderValue: sliderValue,
    setSimulationClockSliderValue: setSliderValue,
  } = useContext(FeaturesContext);

  const { rushStart, rushFinish } = getRushStartAndRushFinish(rushTimes);

  const simulatedTime = mapInRange(sliderValue, 0, 1, rushStart, rushFinish);

  const regularSimulatedClock = calculateClock(
    1,
    rushTimes,
    new Date(simulatedTime)
  );

  const easedSimulatedClock = calculateClock(
    rushCoefficient,
    rushTimes,
    new Date(simulatedTime)
  );

  return (
    <div className="clock__simulation">
      <div className="clock__simulation__title">Simulation</div>
      <div className="clock__simulation_content">
        <AnalogSimulationClock clock={regularSimulatedClock} />
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
