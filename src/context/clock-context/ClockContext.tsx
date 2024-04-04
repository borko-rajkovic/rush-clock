import { createContext, useContext, useEffect, useState } from "react";
import { calculateClock } from "./clock-utils/clock-utils";
import { ClockContextType } from "./ClockContextType";
import { sleep } from "./clock-utils/analog/analog-clock-utils";
import { FeaturesContext } from "../features-context/FeaturesContext";
import { RushTimes } from "../features-context/FeaturesContextType";

export const ClockContext: React.Context<ClockContextType> = createContext(
  calculateClock(2, { rushType: "hour", customRushTimes: { from: 0, to: 0 } })
);

let currentTickId = crypto.randomUUID();

const updateClock = (
  setClock: React.Dispatch<React.SetStateAction<ClockContextType>>,
  rushCoefficient: number,
  rushTimes: RushTimes
) => {
  const clock = calculateClock(rushCoefficient, rushTimes);
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
  rushTimes: RushTimes
) => {
  await sleep(1000 - new Date().getMilliseconds());

  if (tickClockId !== currentTickId) {
    return;
  }

  updateClock(setClock, rushCoefficient, rushTimes);

  tickClock(tickClockId, setClock, rushCoefficient, rushTimes);
};

const ContextClock = ({ children }: { children: React.ReactNode }) => {
  const { rushCoefficient, rushTimes } = useContext(FeaturesContext);
  const [clock, setClock] = useState(calculateClock(2, rushTimes));

  useEffect(() => {
    currentTickId = crypto.randomUUID();
    updateClock(setClock, rushCoefficient, rushTimes);
    tickClock(currentTickId, setClock, rushCoefficient, rushTimes);
  }, [rushCoefficient, rushTimes]);

  return (
    <ClockContext.Provider value={clock}>{children}</ClockContext.Provider>
  );
};

export default ContextClock;
