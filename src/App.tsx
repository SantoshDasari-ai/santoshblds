import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// Lazy load project pages
const NotFound = lazy(() => import("./pages/NotFound"));
const PulsatileFlow = lazy(() => import("./pages/projects/PulsatileFlow"));
const DFMStudy = lazy(() => import("./pages/projects/DFMStudy"));
const RoboticsPresident = lazy(
  () => import("./pages/projects/RoboticsPresident")
);
const RagAi = lazy(() => import("./pages/projects/RagAi"));
const SurgicalDrapes = lazy(() => import("./pages/projects/SurgicalDrapes"));
const RamanSpectroscopy = lazy(
  () => import("./pages/projects/RamanSpectroscopy")
);
const CameraGimbal = lazy(() => import("./pages/projects/CameraGimbal"));
const MedicineBottle = lazy(() => import("./pages/projects/MedicineBottle"));
const CadExercises = lazy(() => import("./pages/projects/CadExercises"));
const SystemOverview = lazy(() => import("./pages/projects/SystemOverview"));
const MechanicalWork = lazy(() => import("./pages/projects/MechanicalWork"));
const Troubleshooting = lazy(() => import("./pages/projects/Troubleshooting"));
const OutreachEvents = lazy(() => import("./pages/projects/OutreachEvents"));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/projects/pulsatile-flow"
                  element={<PulsatileFlow />}
                />
                <Route path="/projects/dfm-study" element={<DFMStudy />} />
                <Route
                  path="/projects/robotics-president"
                  element={<RoboticsPresident />}
                />
                <Route path="/projects/rag-ai" element={<RagAi />} />
                <Route
                  path="/projects/surgical-drapes"
                  element={<SurgicalDrapes />}
                />
                <Route
                  path="/projects/raman-spectroscopy"
                  element={<RamanSpectroscopy />}
                />
                <Route
                  path="/projects/camera-gimbal"
                  element={<CameraGimbal />}
                />
                <Route
                  path="/projects/medicine-bottle"
                  element={<MedicineBottle />}
                />
                <Route
                  path="/projects/cad-exercises"
                  element={<CadExercises />}
                />
                <Route
                  path="/projects/robotics/system-overview"
                  element={<SystemOverview />}
                />
                <Route
                  path="/projects/robotics/mechanical-work"
                  element={<MechanicalWork />}
                />
                <Route
                  path="/projects/robotics/troubleshooting"
                  element={<Troubleshooting />}
                />
                <Route
                  path="/projects/robotics/outreach-events"
                  element={<OutreachEvents />}
                />
              </Routes>
            </Suspense>
          </div>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
