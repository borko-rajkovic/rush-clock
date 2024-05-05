import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ScreenResolutionGuard from "./guards/ScreenResolutionGuard";
import "./Tooltip.css";
import ContextClock from "./context/clock-context/ClockContext";
import ContextFeatures from "./context/features-context/FeaturesContext";
import DesktopLayout from "./layout/DesktopLayout";
import MobileLayout from "./layout/MobileLayout";
import AdminGuard from "./guards/AdminGuard";
import ColorGuard from "./guards/ColorGuard";

function App() {
  return (
    <BrowserRouter>
      <ContextFeatures>
        <ContextClock>
          <ColorGuard>
            <AdminGuard>
              <ScreenResolutionGuard
                mobile={<MobileLayout />}
                desktop={<DesktopLayout />}
              />
            </AdminGuard>
          </ColorGuard>
        </ContextClock>
      </ContextFeatures>
    </BrowserRouter>
  );
}

export default App;
