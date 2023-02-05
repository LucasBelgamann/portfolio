import { Data } from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="project-content">
        <div className="project-title">
        <h4>Conheça alguns de meus</h4>
        <h3>Projetos</h3>
        </div>
        <div className="projects">
          {Data.map((e) => (
            <a href={e.link} target="_blank" rel="noreferrer">
              <img src={e.img} alt="hard" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
