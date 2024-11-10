import { Project } from "../pages/Projects";
import maskexp from "./maskexp.png";
import dummyIcon from "./dmy.png";
import et from "./et.png";
import chordsense from "./chordsense.png";

const p1: Project = {
  id: 1,
  img: maskexp,
  title: "Masked Exp",
  brief:
    "Infilling piano key striking velocity based on surrounding expressive parameters",
  link: "/proj/maskexp",
};

const p2: Project = {
  id: 2,
  img: chordsense,
  title: "Chord Sense",
  brief:
    "Embark on a harmonic journey towards a certain chord progression by interacting with transformers",
  link: "/proj/chordsense",
};

const p3: Project = {
  id: 3,
  img: et,
  title: "Extraterrestrial Vistor",
  brief:
    "Algorithmic composition using Nyquist for programming \n Collaborator: Tinke Zhang",
  link: "/proj/etvisitor",
};

export const projs = [p1, p2, p3];
