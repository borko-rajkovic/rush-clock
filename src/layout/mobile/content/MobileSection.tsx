import ClockSimulation from "../../../components/RushClockSimulation/RushClockSimulation";
import ClockConfigurationSection from "./sections/ClockConfigurationSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import RushClockSection from "./sections/RushClockSection";

const MOBILE_SECTIONS = [
  {
    path: "rush-clock",
    title: "Rush Clock",
    component: <RushClockSection />,
  },
  {
    path: "configuration",
    title: "Configuration",
    component: <ClockConfigurationSection />,
  },
  {
    path: "simulation",
    title: "Simulation",
    component: <ClockSimulation mobile />,
  },
  {
    path: "how-it-works",
    title: "How it works?",
    component: <HowItWorksSection />,
  },
];

export default MOBILE_SECTIONS;
