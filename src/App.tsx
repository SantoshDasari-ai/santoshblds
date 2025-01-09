import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import PulsatileFlow from "./pages/projects/PulsatileFlow";
import DFMStudy from "./pages/projects/DFMStudy";
import RoboticsPresident from "./pages/projects/RoboticsPresident";
import RagAi from "./pages/projects/RagAi";
import SurgicalDrapes from "./pages/projects/SurgicalDrapes";
import RamanSpectroscopy from "./pages/projects/RamanSpectroscopy";
import CameraGimbal from "./pages/projects/CameraGimbal";
import MedicineBottle from "./pages/projects/MedicineBottle";
import CadExercises from "./pages/projects/CadExercises";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects/pulsatile-flow" element={<PulsatileFlow />} />
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
          <Route path="/projects/camera-gimbal" element={<CameraGimbal />} />
          <Route
            path="/projects/medicine-bottle"
            element={<MedicineBottle />}
          />
          <Route path="/projects/cad-exercises" element={<CadExercises />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
