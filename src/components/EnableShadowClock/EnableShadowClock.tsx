import { useContext } from "react";
import "./EnableShadowClock.css";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";

function EnableShadowClock() {
  const { enableShadowClock, setEnableShadowClock } =
    useContext(FeaturesContext);

  return (
    <div className="clock__configuration__enable_shadow_clock">
      <label>Enable shadow clock</label>
      <input
        type="checkbox"
        checked={enableShadowClock}
        onChange={() => setEnableShadowClock(!enableShadowClock)}
      />
    </div>
  );
}

export default EnableShadowClock;
