import { Route, Routes } from "react-router-dom";
import Maskexp from "../projects/Maskexp";
import Notfound from "../pages/Notfount";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Notfound />} />
      <Route path="maskexp" element={<Maskexp />} />
    </Routes>
  );
};

export default ProjectRoutes;
