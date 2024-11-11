import { Route, Routes } from "react-router-dom";
import Maskexp from "../projects/Maskexp";
import Notfound from "../pages/Notfount";
import ChordSense from "../projects/ChordSense";
import EtVisitor from "../projects/EtVisitor";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Notfound />} />
      <Route path="maskexp" element={<Maskexp />} />
      <Route path="chordsense" element={<ChordSense />} />
      <Route path="etvisitor" element={<EtVisitor />} />
    </Routes>
  );
};

export default ProjectRoutes;