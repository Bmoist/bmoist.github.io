import { Project } from "../pages/Projects";
import maskexp from "./maskexp.png";
// import dummyIcon from "./dmy.png";
import et from "./et.png";
import chordsense from "./chordsense.png";
import pico from "./pico.webp";
import rhymatcher from "./rhymatcher.jpg";

const p5: Project = {
  id: 1,
  img: rhymatcher,
  title: "Rhythmic Matcher",
  brief:
    "... is an intuitive transcriber.\n Match touch signals to a musical score. \n(In progress)",
  link: "/proj/rhymatcher",
};

const p4: Project = {
  id: 1,
  img: maskexp,
  title: "Masked Expressiveness",
  brief:
    "Infilling piano key striking velocity based on surrounding expressive parameters",
  link: "/proj/maskexp",
};

const p3: Project = {
  id: 2,
  img: chordsense,
  title: "Chord Sense",
  brief:
    "Embark on a harmonic journey towards a certain chord progression by interacting with transformers",
  link: "/proj/chordsense",
};

const p2: Project = {
  id: 3,
  img: pico,
  title: "Piano Conductor",
  brief:
    "Create artful piano performances by touch signals. Unleash your creative potential with minimal technical distractions.",
  link: "/proj/pico",
};

const p1: Project = {
  id: 3,
  img: et,
  title: "Extraterrestrial Vistor",
  brief:
    "Algorithmic composition using Nyquist for programming \n Collaborator: Tinke Zhang",
  link: "/proj/etvisitor",
};

export const projs = [p5, p4, p3, p2, p1];
