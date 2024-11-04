import PianoFrame from "../component/PianoFrame";
import { useWindowSize } from "../hooks/WindowSize";
import lg from "../logger";
import "./Projects.css";

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
  return (
    // <div className="project-frame-container">
    <PianoFrame maxScrollThres={100} title="Projects">
      <div className="project-container">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src={project.img} />
            <div className="project-card-content">
              <h2>{project.title}</h2>
              <p>{project.brief}</p>
            </div>
          </a>
        ))}
      </div>
    </PianoFrame>
    // </div>
  );
};

export default Projects;
