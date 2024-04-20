import {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import worker_script from "../../worker/clock-worker";
import { FeaturesContext } from "../features-context/FeaturesContext";
import { RushTimesConfiguration } from "../features-context/RushTimesConfiguration";
import { FEATURE_CONTEXT_DEFAULT_VALUES } from "../features-context/default-values";
import { initialDate } from "../initial-date";
import { ClockContextType } from "./ClockContextType";
import { playAlarm } from "./clock-utils/alarm/alarm-utils";
import { calculateClock } from "./clock-utils/clock-utils";
import { updateRushTimes } from "./clock-utils/rush-times/rush-times-utils";

let clockWorker: Worker;

export const ClockContext: React.Context<ClockContextType> = createContext(
  calculateClock(2, FEATURE_CONTEXT_DEFAULT_VALUES.rushTimes, initialDate)
);

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

const ContextClock = ({ children }: { children: React.ReactNode }) => {
  const { rushCoefficient, rushTimes, startAlarm, setRushTimes } =
    useContext(FeaturesContext);
  const [clock, setClock] = useState(calculateClock(2, rushTimes, initialDate));

  useEffect(() => {
    clockWorker = new Worker(worker_script);

    clockWorker.postMessage(null);

    updateClock(
      setClock,
      rushCoefficient,
      rushTimes,
      startAlarm,
      new Date(),
      setRushTimes
    );

    clockWorker.onmessage = ({ data: date }: MessageEvent<Date>) => {
      updateClock(
        setClock,
        rushCoefficient,
        rushTimes,
        startAlarm,
        date,
        setRushTimes
      );
    };

    return () => clockWorker.terminate();
  }, [rushCoefficient, rushTimes, startAlarm, setRushTimes]);

  return (
    <ClockContext.Provider value={clock}>{children}</ClockContext.Provider>
  );
};

export default ContextClock;
