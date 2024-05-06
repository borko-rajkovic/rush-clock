import "./CopyLinksSection.css";
import { useContext } from "react";
import { MdContentCopy } from "react-icons/md";
import { FeaturesContext } from "../../../../context/features-context/FeaturesContext";
import {
  generateCopyEmbeddedLink,
  generateCopyLink,
} from "../../../../components/CopyLinks/CopyLinksUtils";

function CopyLinksSection() {
  const features = useContext(FeaturesContext);

  const copyLinkValue = generateCopyLink(features);
  const copyEmbeddedLinkValue = generateCopyEmbeddedLink(features);

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <>
      <div className="copy-link-mobile-label">Standalone</div>
      <div className="copy-link-mobile">
        <input
          type="text"
          className="copy-link-mobile-input"
          value={copyLinkValue}
          disabled
        ></input>
        <button
          type="button"
          className="copy-link-mobile-button"
          onClick={() => copyLink(copyLinkValue)}
        >
          <MdContentCopy />
        </button>
      </div>
      <div className="copy-link-mobile-label">Embedded</div>
      <div className="copy-link-mobile">
        <input
          type="text"
          className="copy-link-mobile-input"
          value={copyEmbeddedLinkValue}
          disabled
        ></input>
        <button
          type="button"
          className="copy-link-mobile-button"
          onClick={() => copyLink(copyEmbeddedLinkValue)}
        >
          <MdContentCopy />
        </button>
      </div>
    </>
  );
}

export default CopyLinksSection;
