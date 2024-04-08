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
import { RushTimes } from "../features-context/FeaturesContextType";
import { playAlarm } from "./clock-utils/alarm/alarm-utils";

export const ClockContext: React.Context<ClockContextType> = createContext(
  calculateClock(2, { rushType: "hour", customRushTimes: { from: 0, to: 0 } })
);

let currentTickId = crypto.randomUUID();

const updateClock = (
  setClock: React.Dispatch<React.SetStateAction<ClockContextType>>,
  rushCoefficient: number,
  rushTimes: RushTimes,
  startAlarm: React.Dispatch<SetStateAction<void>>
) => {
  const clock = calculateClock(rushCoefficient, rushTimes);
  playAlarm(startAlarm, rushTimes);
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
  rushTimes: RushTimes,
  startAlarm: React.Dispatch<React.SetStateAction<void>>
) => {
  await sleep(1000 - new Date().getMilliseconds());

  if (tickClockId !== currentTickId) {
    return;
  }

  updateClock(setClock, rushCoefficient, rushTimes, startAlarm);

  tickClock(tickClockId, setClock, rushCoefficient, rushTimes, startAlarm);
};

const ContextClock = ({ children }: { children: React.ReactNode }) => {
  const { rushCoefficient, rushTimes, startAlarm } =
    useContext(FeaturesContext);
  const [clock, setClock] = useState(calculateClock(2, rushTimes));

  useEffect(() => {
    currentTickId = crypto.randomUUID();
    updateClock(setClock, rushCoefficient, rushTimes, startAlarm);
    tickClock(currentTickId, setClock, rushCoefficient, rushTimes, startAlarm);
  }, [rushCoefficient, rushTimes, startAlarm]);

  return (
    <ClockContext.Provider value={clock}>{children}</ClockContext.Provider>
  );
};

export default ContextClock;
