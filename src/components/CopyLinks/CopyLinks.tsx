import "./CopyLinks.css";
import { useContext } from "react";
import { FeaturesContext } from "../../context/features-context/FeaturesContext";
import { generateCopyEmbeddedLink, generateCopyLink } from "./CopyLinksUtils";
import { MdContentCopy } from "react-icons/md";

function CopyLinks() {
  const features = useContext(FeaturesContext);

  const copyLinkValue = generateCopyLink(features);
  const copyEmbeddedLinkValue = generateCopyEmbeddedLink(features);

  const copyLink = (link: string) => {
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="copy-link-container">
      <div className="copy-link">
        <div className="copy-link-label">Standalone</div>
        <input
          type="text"
          className="copy-link-input"
          value={copyLinkValue}
          disabled
        ></input>
        <button
          type="button"
          className="copy-link-button"
          onClick={() => copyLink(copyLinkValue)}
        >
          <MdContentCopy />
        </button>
      </div>
      <div className="copy-link">
        <div className="copy-link-label">Embedded</div>
        <input
          type="text"
          className="copy-link-input"
          value={copyEmbeddedLinkValue}
          disabled
        ></input>
        <button
          type="button"
          className="copy-link-button"
          onClick={() => copyLink(copyEmbeddedLinkValue)}
        >
          <MdContentCopy />
        </button>
      </div>
    </div>
  );
}

export default CopyLinks;
