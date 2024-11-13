import { useEffect, useRef, useState } from "react";
import PianoFrame from "../component/PianoFrame";
import "./Projects.css";
import { Link } from "react-router-dom";
import { useWindowSize } from "../hooks/Window";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const linePos = useWindowSize();

  useEffect(() => {
    // Function to calculate and update font size based on card width
    const updateFontSize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        setFontSize(cardWidth * 0.06);
      }
    };
    const updateContainerSize = () => {
      if (containerRef.current) {
        const cHeight = containerRef.current.offsetHeight;
        setContainerHeight(cHeight);
      }
    };
    updateFontSize();
    updateContainerSize();
    window.addEventListener("resize", updateFontSize);
    window.addEventListener("resize", updateContainerSize);
    // console.log("===container height", containerHeight);
    return () => {
      window.removeEventListener("resize", updateFontSize);
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);

  return (
    // <div className="project-frame-container">
    <PianoFrame
      maxScrollThres={containerHeight}
      title="Projects"
      id="proj_frame"
      sectionVisibleThres={containerHeight / 1.7}
    >
      <div
        className="project-container"
        ref={containerRef}
        style={{ top: linePos.x2 * 0.3 }}
      >
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
