import { Data } from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <div className="project-content">
        <h4>Conheça alguns de meus</h4>
        <h3>Projetos</h3>
        <div className="projects">
          {Data.map((e) => (
              <img src={e.img} alt="hard" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
