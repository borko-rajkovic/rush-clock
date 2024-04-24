import { useContext } from "react";
import "./ColorThemeConfiguration.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import { ColorTheme } from "./ColorTheme";
import strawberry from "./theme-icons/strawberry.png";
import blueberry from "./theme-icons/blueberry.png";
import lime from "./theme-icons/lime.png";

function ColorThemeConfiguration() {
  const { hueColor, setHueColor } = useContext(FeaturesContext);

  return (
    <>
      <label className="color_theme_label">Color theme</label>
      <div className="color_theme">
        <input
          className="color_theme__input"
          name="color_theme"
          type="radio"
          id="cherry"
          checked={hueColor === ColorTheme.Cherry}
          onChange={() => setHueColor(ColorTheme.Cherry)}
        />
        <label className="color_theme__label" htmlFor="cherry">
          <img src={strawberry} />
        </label>
        <input
          className="color_theme__input"
          name="color_theme"
          type="radio"
          id="blueberry"
          checked={hueColor === ColorTheme.Blueberry}
          onChange={() => setHueColor(ColorTheme.Blueberry)}
        />
        <label className="color_theme__label" htmlFor="blueberry">
          <img src={blueberry} />
        </label>
        <input
          className="color_theme__input"
          name="color_theme"
          type="radio"
          id="lime"
          checked={hueColor === ColorTheme.Lime}
          onChange={() => setHueColor(ColorTheme.Lime)}
        />
        <label className="color_theme__label" htmlFor="lime">
          <img src={lime} />
        </label>
      </div>
    </>
  );
}

export default ColorThemeConfiguration;
