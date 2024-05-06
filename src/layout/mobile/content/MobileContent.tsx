import { MINIMUM_WIDTH } from "../../../guards/ScreenResolutionGuard";
import MOBILE_SECTIONS from "./MobileSection";
import "./MobileContent.css";

function MobileContent({ mobileSectionPath }: { mobileSectionPath: string }) {
  const mobileSection = MOBILE_SECTIONS.find(
    (x) => x.path === mobileSectionPath
  );

  return mobileSection ? (
    <>
      <div className="mobile_section__title">{mobileSection.title}</div>
      {mobileSection.component}
    </>
  ) : (
    <div className="screen-resolution-guard">
      <div className="screen-resolution-guard__content">
        Minimum supported width for admin&nbsp;is&nbsp;
        <strong>{MINIMUM_WIDTH}</strong>px,&nbsp;right?
      </div>
    </div>
  );
}

export default MobileContent;
