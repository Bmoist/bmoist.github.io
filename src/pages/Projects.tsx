import { useEffect, useRef, useState } from "react";
import PianoFrame from "../component/PianoFrame";
import { useWindowSize } from "../hooks/WindowSize";
import lg from "../logger";
import "./Projects.css";
import { Link } from "react-router-dom";

export interface Project {
  id: number;
  img: string;
  title: string;
  brief: string;
  link: string;
}

interface ProjectProps {
  projects: Project[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  const cardRef = useRef<HTMLDivElement>(null); // Ref to the card div
  const [fontSize, setFontSize] = useState<number>(0);
  useEffect(() => {
    // Function to calculate and update font size based on card width
    const updateFontSize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        setFontSize(cardWidth * 0.06);
        lg.info("cardwidth: ", cardWidth);
      }
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    // <div className="project-frame-container">
    <PianoFrame
      maxScrollThres={window.innerHeight * 1.5}
      title="Projects"
      id="proj_frame"
    >
      <div className="project-container">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card" ref={cardRef}>
              <img src={project.img} />
              <div className="project-card-content">
                <h2>{project.title}</h2>
                <p style={{ fontSize: fontSize }}>{project.brief}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PianoFrame>
    // </div>
  );
};

export default Projects;
