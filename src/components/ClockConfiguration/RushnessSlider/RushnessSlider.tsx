import { useContext } from "react";
import "./RushnessSlider.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function RushnessSlider() {
  const { rushCoefficient, setRushCoefficient } = useContext(FeaturesContext);

  return (
    <div className="rushness_slider__container">
      <label
        className="rushness_slider__label"
        data-tooltip="Coefficient that determines how much clock should rush. Value of 1 represents the real clock time."
      >
        <abbr>Rushness</abbr>
      </label>
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
      <label htmlFor="rushnessSlider" className="rushness_slider__input_label">
        {rushCoefficient.toFixed(2)}
      </label>
    </div>
  );
}

export default RushnessSlider;
