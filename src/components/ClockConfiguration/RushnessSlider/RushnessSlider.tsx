import { useContext } from "react";
import "./RushnessSlider.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function RushnessSlider() {
  const { rushCoefficient, setRushCoefficient } = useContext(FeaturesContext);

  return (
    <div className="rushness_slider__container">
      <div>Rushness</div>
      <input
        id="rushnessSlider"
        type="range"
        min={1}
        max={4}
        step={0.02}
        className="rushness_slider__input"
        value={rushCoefficient}
        onChange={(e) => setRushCoefficient(Number(e.target.value))}
      ></input>
      <label htmlFor="rushnessSlider" className="rushness_slider__label">
        {rushCoefficient.toFixed(2)}
      </label>
    </div>
  );
}

export default RushnessSlider;
