import { useContext } from "react";
import "./ColorThemeConfiguration.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function ColorThemeConfiguration() {
  const { hueColor, setHueColor } = useContext(FeaturesContext);

  return (
    <div className="color_theme_slider__container">
      <label className="color_theme_slider__label">Color theme</label>
      <input
        id="colorTheme"
        type="range"
        min={0}
        max={360}
        step={1}
        className="color_theme_slider__input"
        value={hueColor}
        onChange={(e) => setHueColor(Number(e.target.value))}
      ></input>
      <label htmlFor="colorTheme" className="color_theme_slider__input_label">
        {hueColor}
      </label>
    </div>
  );
}

export default ColorThemeConfiguration;
