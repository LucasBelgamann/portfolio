import { Data } from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="cont-project">
      <h2 className="title-projects">Projetos</h2>
      <div className="container-projects">
      {Data.map((e) => (
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <div className="techs">
              {
                e.techs.map((tech) => <img src={tech.img} alt={e.title} />)
              }
            </div>
            <button type="button" className="more">
              <a href={e.link} target="_blank" rel="noreferrer">
                Ver mais...
              </a>
            </button>
          </div>
          <img className="image" src={e.img} alt="" />
        </div>
      ))}
    </div>
    </div>
  );
};
export default Projects;
