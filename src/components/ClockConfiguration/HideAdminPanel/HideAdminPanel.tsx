import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./HideAdminPanel.css";

function HideAdminPanel() {
  const { linkHideAdmin, setLinkHideAdmin } = useContext(FeaturesContext);

  return (
    <div className="clock__configuration__hide_admin_panel">
      <label>Hide Admin Panel</label>
      <input
        type="checkbox"
        checked={linkHideAdmin}
        onChange={() => setLinkHideAdmin(!linkHideAdmin)}
      />
    </div>
  );
}

export default HideAdminPanel;
