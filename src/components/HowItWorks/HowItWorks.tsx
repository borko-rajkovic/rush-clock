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
          <h1>Welcome to Rush Clock!</h1>
          <p>
            Have you ever wanted to have just a little bit more time when your
            deadline approaches? Now you can with a help of{" "}
            <strong>Rush Clock</strong>!
          </p>
          <p>
            <strong>Rush Clock</strong> is a unique web application / widget
            that offers a mesmerizing perspective on timekeeping with its
            innovative easing function analog clock. Let's delve into how{" "}
            <strong>Rush Clock</strong> works:
          </p>
          <h3>Introduction:</h3>
          <p>
            At its core, <strong>Rush Clock</strong> features an analog clock
            that doesn't display the real time but instead follows an easing
            function, specifically an ease-out function. This creates a visually
            captivating experience as time progresses smoothly.
          </p>
          <h3>Admin Page:</h3>
          <ul>
            <li>
              Setting Up: Access the admin page to configure{" "}
              <strong>Rush Clock</strong> according to your preferences.
            </li>
            <li>
              Default Settings: By default, <strong>Rush Clock</strong> eases
              time from the beginning of the current hour to the end of the
              hour.
            </li>
            <li>
              Additional Options: Customize <strong>Rush Clock</strong> with
              options such as daily easing, setting custom date-time ranges, and
              adjusting the coefficient of easing.
            </li>
          </ul>
          <h3>Features:</h3>
          <ul>
            <li>Alarm: Set alarms to stay on track with your schedule.</li>
            <li>
              Themes: Choose from different themes to personalize your{" "}
              <strong>Rush Clock</strong> experience.
            </li>
            <li>
              Digital Clock: Opt to display a real time digital clock alongside
              the <strong>Rush Clock</strong>, with customizable format options.
            </li>
            <li>
              Shadow Clock: Enable the shadow clock feature to reveal a
              real-time clock when clicking on the center of{" "}
              <strong>Rush Clock</strong>.
            </li>
          </ul>
          <h3>Simulator:</h3>
          <p>
            Experience <strong>Rush Clock</strong>'s functionality firsthand
            with the simulator feature. Compare real time analog clock with the{" "}
            <strong>Rush Clock</strong> using the interactive slider.
          </p>
          <p>
            With Rush Clock, timekeeping becomes an engaging and dynamic
            experience, offering both utility and aesthetic appeal.
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
