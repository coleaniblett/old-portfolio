import React from 'react';
import './Projects.css';
import Katoche from '../../KatocheProjectImg.gif';
import Portfolio from '../../PortfolioProjectImg.gif';

class Projects extends React.Component {
  /*render() {
    return (
      <div className="main-content">
        <h2 className="title">
          Projects
        </h2>
        <div className="main-grid">
          <div className="grid-top-left, grid-left">
            <p>
              Katoche (C++)
            </p>
          </div>
          <div className="grid-top-right">
            <ul>
              <li>Text-based adventure game</li>
              <li>Parses user input to determine player intent</li>
              <li>Utilizes OOP principles and design</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }*/

  render() {
    return (
      <div className="main-content">
        <h2 className="title">
          Projects
        </h2>
        <div className="project-grid">
          <div className="project" id="katoche">
            <div className="title">
              <p>Katoche</p>
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
            <div className="title">
              <p>Portfolio</p>
            </div>
            <img class="projectImg" src={Portfolio}/>
            <div className="description">
              <ul>
                <li>Front-end web app built with React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;