import React from 'react';
import './Projects.css';
import Katoche from '../../KatocheProjectImg.gif';
import Portfolio from '../../PortfolioProjectImg.gif';

class Projects extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2 className="title">
          Projects
        </h2>
        <div className="project-grid">
          <div className="project" id="katoche">
            <div className="projectTitle">
              <h3>Katoche</h3>
            </div>
            <img class="projectImg" src={Katoche}/>
            <div className="description">
              <ul>
                <li>Text-based adventure game built with C++</li>
                <li>Parses user input to determine player intent</li>
                <li>Utilizes OOP principles and design</li>
              </ul>
            </div>
          </div>
          <div className="project" id="portfolio">
            <div className="projectTitle">
              <h3>Portfolio Site</h3>
            </div>
            <img class="projectImg" src={Portfolio}/>
            <div className="description">
              <ul>
                <li>Front-end web app built with React</li>
                <li>Dynamically-designed for cross-platform viewing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;