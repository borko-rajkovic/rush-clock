import { useState } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => setDisplayPopup(!displayPopup);

  return (
    <>
      <div
        className="how-it-works__button how-it-works__button_fixed"
        onClick={toggleDisplayPopup}
      >
        How it works
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></circle>
          <circle cx="128" cy="180" r="12"></circle>
          <path
            d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>
        </svg>
      </div>
      <div
        className={`popup ${displayPopup && "popup__displayed"}`}
        onClick={toggleDisplayPopup}
        id="popup"
      >
        <div className="popup__content" onClick={(e) => e.stopPropagation()}>
          <h2 className="heading-secondary">Start booking now</h2>
          <h3 className="heading-tertiary">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Godard health goth green juice +1, helvetica taxidermy synth.
            Brooklyn wayfarers hoodie twee, keffiyeh XOXO microdosing fashion
            axe iPhone bespoke vape. Affogato brooklyn offal meditation raclette
            aesthetic heirloom post-ironic iPhone venmo leggings.
          </p>
          <div
            className="how-it-works__button how-it-works__button-close"
            onClick={toggleDisplayPopup}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
