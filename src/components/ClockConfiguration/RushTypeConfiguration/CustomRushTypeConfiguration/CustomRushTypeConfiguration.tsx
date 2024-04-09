import moment from "moment";
import "./CustomRushTypeConfiguration.css";
import { RushTimes } from "../../../../context/features-context/FeaturesContextType";
import { useState } from "react";

function CustomRushTypeConfiguration({
  rushTimes,
  setRushTimes,
}: {
  rushTimes: RushTimes;
  setRushTimes: React.Dispatch<React.SetStateAction<RushTimes>>;
}) {
  const initialDateFrom = moment(rushTimes.customRushTimes.from).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  const initialDateTo = moment(rushTimes.customRushTimes.to).format(
    "YYYY-MM-DD HH:mm:ss"
  );

  const [customDateFrom, setCustomDateFrom] = useState(initialDateFrom);
  const [customDateTo, setCustomDateTo] = useState(initialDateTo);

  const momentDateFrom = moment(customDateFrom, "YYYY-MM-DD HH:mm:ss");
  const momentDateTo = moment(customDateTo, "YYYY-MM-DD HH:mm:ss");

  const isCustomDateValid = (
    input: string,
    { dateFrom = momentDateFrom, dateTo = momentDateTo }
  ) => {
    if (!input.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)) {
      return false;
    }

    const momentDate = moment(input, "YYYY-MM-DD HH:mm:ss");

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
        <abbr data-tooltip='Time format: "YYYY-MM-DD HH:mm:ss"' title="">
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
              const newDateFrom = moment(
                newCustomDateFrom,
                "YYYY-MM-DD HH:mm:ss"
              );
              setCustomDateFrom(newCustomDateFrom);
              if (
                isCustomDateValid(newCustomDateFrom, { dateFrom: newDateFrom })
              ) {
                setCustomDates(
                  +moment(newCustomDateFrom, "YYYY-MM-DD HH:mm:ss").toDate(),
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
              const newDateTo = moment(newCustomDateTo, "YYYY-MM-DD HH:mm:ss");
              setCustomDateTo(newCustomDateTo);
              if (isCustomDateValid(newCustomDateTo, { dateTo: newDateTo })) {
                setCustomDates(
                  +momentDateFrom.toDate(),
                  +moment(newCustomDateTo, "YYYY-MM-DD HH:mm:ss").toDate()
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
