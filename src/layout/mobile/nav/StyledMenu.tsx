import "./StyledMenu.css";
import { FaRegClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

function Menu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigateTo = (mobileItem: string) => {
    console.log("Chose: " + mobileItem);
    setOpen(!open);
  };
  return (
    <nav className={`styled_menu ${!open ? "styled_menu__hide" : ""}`}>
      <div>
        <FaRegClock className="styled_menu__icon" />
        <div
          className="styled_menu__item_label"
          onClick={() => navigateTo("rush-clock")}
        >
          Rush Clock
        </div>
      </div>
      <hr />
      <div>
        <IoSettingsOutline className="styled_menu__icon" />
        <div
          className="styled_menu__item_label"
          onClick={() => navigateTo("settings")}
        >
          Settings
        </div>
      </div>
      <hr />
      <div>
        <IoPlayCircleOutline className="styled_menu__icon" />
        <div
          className="styled_menu__item_label"
          onClick={() => navigateTo("simulation")}
        >
          Simulation
        </div>
      </div>
      <hr />
      <div>
        <FiExternalLink className="styled_menu__icon" />
        <div
          className="styled_menu__item_label"
          onClick={() => navigateTo("links")}
        >
          Links
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Menu;
