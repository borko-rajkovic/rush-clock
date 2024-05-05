import { MINIMUM_WIDTH } from "../guards/ScreenResolutionGuard";

function MobileLayout() {
  return (
    <div className="screen-resolution-guard">
      <div className="screen-resolution-guard__content">
        Minimum supported width for admin&nbsp;is&nbsp;
        <strong>{MINIMUM_WIDTH}</strong>px,&nbsp;right?
      </div>
    </div>
  );
}

export default MobileLayout;
