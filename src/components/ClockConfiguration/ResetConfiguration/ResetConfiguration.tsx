import { useContext } from "react";
import "./ResetConfiguration.css";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";

function ResetConfiguration() {
  const { resetConfiguration } = useContext(FeaturesContext);

  return (
    <label className="reset_button" onClick={() => resetConfiguration()}>
      Reset
    </label>
  );
}

export default ResetConfiguration;
