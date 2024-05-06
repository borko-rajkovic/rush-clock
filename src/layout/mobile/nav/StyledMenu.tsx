import "./StyledMenu.css";
import { FaRegClock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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

  const openGithub = () => {
    window.open(
      "https://github.com/borko-rajkovic/rush-clock",
      "_blank",
      "noreferrer"
    );
  };

  return (
    <nav className={`styled_menu ${!open ? "styled_menu__hide" : ""}`}>
      <div onClick={() => navigateTo("rush-clock")}>
        <FaRegClock className="styled_menu__icon" />
        <div className="styled_menu__item_label">Rush Clock</div>
      </div>
      <hr />
      <div onClick={() => navigateTo("configuration")}>
        <IoSettingsOutline className="styled_menu__icon" />
        <div className="styled_menu__item_label">Configure</div>
      </div>
      <hr />
      <div onClick={() => navigateTo("simulation")}>
        <IoPlayCircleOutline className="styled_menu__icon" />
        <div className="styled_menu__item_label">Simulation</div>
      </div>
      <hr />
      <div onClick={() => navigateTo("links")}>
        <FiExternalLink className="styled_menu__icon" />
        <div className="styled_menu__item_label">Links</div>
      </div>
      <hr />
      <div onClick={() => navigateTo("how-it-works")}>
        <FaRegQuestionCircle className="styled_menu__icon" />
        <div className="styled_menu__item_label">How it works</div>
      </div>
      <hr />
      <div onClick={() => openGithub()}>
        <FaGithub className="styled_menu__icon" />
        <div className="styled_menu__item_label">Github</div>
      </div>
    </nav>
  );
}

export default Menu;
