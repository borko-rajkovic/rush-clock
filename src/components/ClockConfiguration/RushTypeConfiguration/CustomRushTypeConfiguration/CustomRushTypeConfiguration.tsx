import "./CustomRushTypeConfiguration.css";
import { RushTimesConfiguration } from "../../../../context/features-context/RushTimesConfiguration";
import { useState } from "react";
import {
  CUSTOM_DATE_FORMAT,
  customDateStringToMoment,
  numberToCustomDateString,
} from "../../../../context/clock-context/clock-utils/moment-utils/moment-utils";

function CustomRushTypeConfiguration({
  rushTimes,
  setRushTimes,
}: {
  rushTimes: RushTimesConfiguration;
  setRushTimes: React.Dispatch<React.SetStateAction<RushTimesConfiguration>>;
}) {
  const initialDateFrom = numberToCustomDateString(
    rushTimes.customRushTimes.from
  );
  const initialDateTo = numberToCustomDateString(rushTimes.customRushTimes.to);

  const [customDateFrom, setCustomDateFrom] = useState(initialDateFrom);
  const [customDateTo, setCustomDateTo] = useState(initialDateTo);

  const momentDateFrom = customDateStringToMoment(customDateFrom);
  const momentDateTo = customDateStringToMoment(customDateTo);

  const isCustomDateValid = (
    input: string,
    { dateFrom = momentDateFrom, dateTo = momentDateTo }
  ) => {
    if (!input.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)) {
      return false;
    }

    const momentDate = customDateStringToMoment(input);

    if (!momentDate.isValid()) {
      return false;
    }

    return +dateTo.toDate() - +dateFrom.toDate() >= 0;
  };

  const setCustomDates = (from: number, to: number) => {
    setRushTimes((rushTimes) =>
      Object.assign(
        {},
        { ...rushTimes },
        {
          customRushTimes: {
            from,
            to,
          },
        }
      )
    );
  };

  return (
    <>
      <h1>Custom Rush Clock</h1>
      <p>
        Unlike <strong>Hourly Rush Clock</strong> or{" "}
        <strong>Daily Rush Clock</strong>, this type of Rush Clock will rush
        only in the{" "}
        <abbr data-tooltip={`Time format: "${CUSTOM_DATE_FORMAT}"`} title="">
          time range
        </abbr>{" "}
        you specify here:
      </p>
      <div className="inp_wrapper">
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            className={isCustomDateValid(customDateFrom, {}) ? "" : "inp_error"}
            id="inp"
            placeholder="&nbsp;"
            value={customDateFrom}
            onChange={(e) => {
              const newCustomDateFrom = e.target.value;
              const newDateFrom = customDateStringToMoment(newCustomDateFrom);
              setCustomDateFrom(newCustomDateFrom);
              if (
                isCustomDateValid(newCustomDateFrom, { dateFrom: newDateFrom })
              ) {
                setCustomDates(
                  +customDateStringToMoment(newCustomDateFrom).toDate(),
                  +momentDateTo.toDate()
                );
              }
            }}
          />
          <span className="label">From</span>
          <span className="focus-bg"></span>
        </label>
      </div>
      <div className="inp_wrapper">
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            className={isCustomDateValid(customDateTo, {}) ? "" : "inp_error"}
            id="inp"
            placeholder="&nbsp;"
            value={customDateTo}
            onChange={(e) => {
              const newCustomDateTo = e.target.value;
              const newDateTo = customDateStringToMoment(newCustomDateTo);
              setCustomDateTo(newCustomDateTo);
              if (isCustomDateValid(newCustomDateTo, { dateTo: newDateTo })) {
                setCustomDates(
                  +momentDateFrom.toDate(),
                  +customDateStringToMoment(newCustomDateTo).toDate()
                );
              }
            }}
          />
          <span className="label">To</span>
          <span className="focus-bg"></span>
        </label>
      </div>
    </>
  );
}

export default CustomRushTypeConfiguration;
