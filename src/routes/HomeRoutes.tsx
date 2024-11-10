import { Route, Routes } from "react-router-dom";
import HomeNavWrap from "../component/HomeNavWrap";
import About from "../pages/About";
import Home from "../pages/Home";
import Music from "../pages/Music";
import Projects from "../pages/Projects";
import { projs } from "../data/Projects";
import { mur_list } from "../data/Music";
import { ParticleLayout } from "../component/ParticleBackground";

const HomeRoutes = () => {
  return (
    <ParticleLayout>
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
              <Music music={mur_list} />
            </HomeNavWrap>
          }
        />
      </Routes>
    </ParticleLayout>
  );
};

export default HomeRoutes;
