import "./StyledMenu.css";
import { FaRegClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";

function Menu({
  open,
  setOpen,
  setMobileSectionPath,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileSectionPath: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigateTo = (mobileItem: string) => {
    setMobileSectionPath(mobileItem);
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
          onClick={() => navigateTo("configuration")}
        >
          Configure
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
      <div>
        <FaRegQuestionCircle className="styled_menu__icon" />
        <div
          className="styled_menu__item_label"
          onClick={() => navigateTo("how-it-works")}
        >
          How it works
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Menu;
