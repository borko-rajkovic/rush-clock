import "./MobileContent.css";
import MOBILE_SECTIONS from "./MobileSection";

function MobileContent({ mobileSectionPath }: { mobileSectionPath: string }) {
  const mobileSection = MOBILE_SECTIONS.find(
    (x) => x.path === mobileSectionPath
  );

  return (
    <>
      <div className="mobile_section__title">{mobileSection?.title}</div>
      {mobileSection?.component}
    </>
  );
}

export default MobileContent;
