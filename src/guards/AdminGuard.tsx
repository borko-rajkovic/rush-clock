import { useContext } from "react";
import { FeaturesContext } from "../context/features-context/FeaturesContext";
import StandaloneLayout from "../layout/standalone/StandaloneLayout";

const AdminGuard = ({ children }: { children: React.ReactNode }) => {
  const { hideAdmin } = useContext(FeaturesContext);

  return hideAdmin ? <StandaloneLayout /> : children;
};

export default AdminGuard;
