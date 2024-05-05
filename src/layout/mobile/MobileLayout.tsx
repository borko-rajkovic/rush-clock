import { useState } from "react";
import { MINIMUM_WIDTH } from "../../guards/ScreenResolutionGuard";
import Menu from "./nav/StyledMenu";
import Burger from "./nav/Burger";

function MobileLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <div className="screen-resolution-guard">
        <div className="screen-resolution-guard__content">
          Minimum supported width for admin&nbsp;is&nbsp;
          <strong>{MINIMUM_WIDTH}</strong>px,&nbsp;right?
        </div>
      </div>
    </>
  );
}

export default MobileLayout;
