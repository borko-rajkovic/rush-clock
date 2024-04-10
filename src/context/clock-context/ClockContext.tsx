import {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { calculateClock } from "./clock-utils/clock-utils";
import { ClockContextType } from "./ClockContextType";
import { sleep } from "./clock-utils/analog/analog-clock-utils";
import { FeaturesContext } from "../features-context/FeaturesContext";
import { RushTimesConfiguration } from "../features-context/RushTimesConfiguration";
import { playAlarm } from "./clock-utils/alarm/alarm-utils";
import { initialDate } from "../initial-date";
import { FEATURE_CONTEXT_DEFAULT_VALUES } from "../features-context/default-values";
import { updateRushTimes } from "./clock-utils/rush-times/rush-times-utils";

export const ClockContext: React.Context<ClockContextType> = createContext(
  calculateClock(2, FEATURE_CONTEXT_DEFAULT_VALUES.rushTimes, initialDate)
);

let currentTickId = crypto.randomUUID();

const updateClock = (
  setClock: React.Dispatch<React.SetStateAction<ClockContextType>>,
  rushCoefficient: number,
  rushTimes: RushTimesConfiguration,
  startAlarm: React.Dispatch<SetStateAction<void>>,
  date: Date,
  setRushTimes: React.Dispatch<SetStateAction<RushTimesConfiguration>>
) => {
  const clock = calculateClock(rushCoefficient, rushTimes, date);
  updateRushTimes(date, setRushTimes);
  playAlarm(startAlarm, rushTimes, date);
  setClock(clock);
};

/**
 * Tick clock each second.
 *
 * If we used setInterval, the clock will likely not start
 * at exact second, but most probably with some milliseconds
 * added, which will appear to a user that clock is ticking late.
 *
 * Also, using interval the clock would drift over time as you
 * cannot guarantee it will execute after exactly one second.
 *
 * Using setTimeout where we calculate the time to the next second
 * should give us a more accurate clock.
 */
const tickClock = async (
  tickClockId: string,
  setClock: React.Dispatch<React.SetStateAction<ClockContextType>>,
  rushCoefficient: number,
  rushTimes: RushTimesConfiguration,
  startAlarm: React.Dispatch<React.SetStateAction<void>>,
  setRushTimes: React.Dispatch<React.SetStateAction<RushTimesConfiguration>>
) => {
  await sleep(1000 - new Date().getMilliseconds());

  /**
   * In case any dependency for useEffect() is changed, it would
   * run new tickClock function, so essentially 2 timers
   * with different settings would compete.
   *
   * That is why we feed tickClock() with tickClockId (uuid), so we can
   * recognize when current instance of timer is obsolete.
   *
   * Example: change rushCoefficient would trigger new tickClock()
   */
  if (tickClockId !== currentTickId) {
    return;
  }

  updateClock(
    setClock,
    rushCoefficient,
    rushTimes,
    startAlarm,
    new Date(),
    setRushTimes
  );

  tickClock(
    tickClockId,
    setClock,
    rushCoefficient,
    rushTimes,
    startAlarm,
    setRushTimes
  );
};

const ContextClock = ({ children }: { children: React.ReactNode }) => {
  const { rushCoefficient, rushTimes, startAlarm, setRushTimes } =
    useContext(FeaturesContext);
  const [clock, setClock] = useState(calculateClock(2, rushTimes, initialDate));

  useEffect(() => {
    currentTickId = crypto.randomUUID();
    updateClock(
      setClock,
      rushCoefficient,
      rushTimes,
      startAlarm,
      new Date(),
      setRushTimes
    );
    tickClock(
      currentTickId,
      setClock,
      rushCoefficient,
      rushTimes,
      startAlarm,
      setRushTimes
    );
  }, [rushCoefficient, rushTimes, startAlarm, setRushTimes]);

  return (
    <ClockContext.Provider value={clock}>{children}</ClockContext.Provider>
  );
};

export default ContextClock;
