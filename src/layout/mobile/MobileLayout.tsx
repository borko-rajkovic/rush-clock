import { useState } from "react";
import Menu from "./nav/StyledMenu";
import Burger from "./nav/Burger";
import MobileContent from "./content/MobileContent";

function MobileLayout() {
  const [open, setOpen] = useState(false);
  const [mobileSectionPath, setMobileSectionPath] = useState("rush-clock");

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu
        open={open}
        setOpen={setOpen}
        setMobileSectionPath={setMobileSectionPath}
      />
      <MobileContent mobileSectionPath={mobileSectionPath} />
    </>
  );
}

export default MobileLayout;
