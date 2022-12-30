import './Projects.css';
import { ProjectData } from '../ProjectData/ProjectData';

export function Projects() {
  return (
    <div className="main-content">
      <h2 className="title">Projects</h2>
      <div className="row project-grid">
        {/* Iterate through the array of objects */}
        {ProjectData.map((project) => (
          <div className="col-md-6 project" key={project.name}>
            {/* Display the name and image */}
            <h2 className="projectTitle">{project.name}</h2>
            <img src={project.src} alt={project.name} className="projectImg"/>

            {/* Display the bulletpoints */}
            <ul className="description">
              {/* Check if each bulletpoint is not null and create a list item if it is not */}
              {project.bulletpoint1 && <li>{project.bulletpoint1}</li>}
              {project.bulletpoint2 && <li>{project.bulletpoint2}</li>}
              {project.bulletpoint3 && <li>{project.bulletpoint3}</li>}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}