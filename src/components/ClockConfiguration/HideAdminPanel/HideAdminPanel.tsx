import { useContext } from "react";
import { FeaturesContext } from "../../../context/features-context/FeaturesContext";
import "./HideAdminPanel.css";

function HideAdminPanel() {
  const { linkHideAdmin, setLinkHideAdmin } = useContext(FeaturesContext);

  return (
    <div className="clock__configuration__hide_admin_panel">
      <label>Hide Admin Panel</label>
      <div className="checkbox_item citem_1">
        <label className="checkbox_wrap">
          <input
            type="checkbox"
            className="checkbox_inp"
            checked={linkHideAdmin}
            onChange={() => setLinkHideAdmin(!linkHideAdmin)}
          />
          <span className="checkbox_mark"></span>
        </label>
      </div>
    </div>
  );
}

export default HideAdminPanel;
