import { Route, Routes } from "react-router-dom";
import HomeNavWrap from "../component/HomeNavWrap";
import About from "../pages/About";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Projects from "../pages/Projects";
import { projs } from "../data/Projects";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/about"
        element={
          <HomeNavWrap>
            <About />
          </HomeNavWrap>
        }
      />
      <Route
        path="/projects"
        element={
          <HomeNavWrap>
            <Projects projects={projs} />
          </HomeNavWrap>
        }
      />
      <Route
        path="/music"
        element={
          <HomeNavWrap>
            <Music />
          </HomeNavWrap>
        }
      />
    </Routes>
  );
};

export default HomeRoutes;
