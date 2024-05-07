import { useContext } from "react";
import AnalogClock from "../components/AnalogClock/AnalogClock";
import DigitalClock from "../components/DigitalClock/DigitalClock";
import { FeaturesContext } from "../context/features-context/FeaturesContext";

function StandaloneLayout() {
  const { displayDigitalClock } = useContext(FeaturesContext);

  return (
    <section className="clock container">
      <style
        dangerouslySetInnerHTML={{
          __html: "body {background-color: unset}",
        }}
      ></style>
      <div className="clock__container grid">
        <div className="clock__content grid">
          <AnalogClock />
          {displayDigitalClock && <DigitalClock />}
        </div>
      </div>
    </section>
  );
}

export default StandaloneLayout;
