import About from "./pages/About";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Projects from "./pages/Projects";
import HomeNav from "./component/HomeNavBar";
import TransitionWrapper from "./lib/Transition";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { projs } from "./data/Projects";

function App() {
  return (
    <Router basename="/bmoist.github.io">
      <HomeNav />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projs} />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </TransitionWrapper>
    </Router>
  );
}

export default App;
