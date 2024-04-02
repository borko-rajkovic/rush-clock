import { useContext } from "react";
import "./EnableShadowClock.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function EnableShadowClock() {
  const { enableShadowClock, setEnableShadowClock } =
    useContext(FeaturesContext);

  return (
    <div className="clock__configuration__enable_shadow_clock">
      <label>
        Enable{" "}
        <abbr
          data-tooltip="When enabled, click on the center of the clock will toggle real clock time in a shadow behind Rush Clock"
          title=""
        >
          Shadow
        </abbr>{" "}
        Clock
      </label>
      <div className="checkbox_item citem_1">
        <label className="checkbox_wrap">
          <input
            type="checkbox"
            className="checkbox_inp"
            checked={enableShadowClock}
            onChange={() => setEnableShadowClock(!enableShadowClock)}
          />
          <span className="checkbox_mark"></span>
        </label>
      </div>
    </div>
  );
}

export default EnableShadowClock;
