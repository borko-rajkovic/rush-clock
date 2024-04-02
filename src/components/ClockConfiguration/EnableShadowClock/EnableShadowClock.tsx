import { useContext } from "react";
import "./EnableShadowClock.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function EnableShadowClock() {
  const { enableShadowClock, setEnableShadowClock } =
    useContext(FeaturesContext);

  return (
    <div className="clock__configuration__enable_shadow_clock">
      <label>Enable Shadow Clock</label>
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
