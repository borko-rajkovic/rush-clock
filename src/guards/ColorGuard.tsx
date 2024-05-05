import { useContext } from "react";
import { FeaturesContext } from "../context/features-context/FeaturesContext";

const ColorGuard = ({ children }: { children: React.ReactNode }) => {
  const { hueColor } = useContext(FeaturesContext);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root {--hue-color: ${hueColor}}`,
        }}
      ></style>
      {children}
    </>
  );
};

export default ColorGuard;
