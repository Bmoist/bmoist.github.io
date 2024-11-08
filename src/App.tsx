import TransitionWrapper from "./lib/Transition";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeRoutes from "./routes/HomeRoutes";
import ProjectRoutes from "./routes/ProjectRoutes";
import Notfound from "./pages/Notfount";

function App() {
  return (
    <Router basename="/bmoist.github.io">
      {/* <TransitionWrapper> */}
      <Routes>
        <Route path="/*" element={<HomeRoutes />} />
        <Route path="/proj/*" element={<ProjectRoutes />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      {/* <ProjectRoutes /> */}
      {/* </TransitionWrapper> */}
    </Router>
  );
}

export default App;
