import React from 'react';
import './Projects.css';
import Katoche from '../../KatocheProjectImg.gif';
import Portfolio from '../../PortfolioProjectImg.gif';
import DCRA from '../../DCRAProjectImg.gif';

class Projects extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2 className="title">
          Projects
        </h2>
        <div className="project-grid">
          <div className="project" id="dcra">
            <div className="projectTitle">
              <h3>The Distillation-Combination-Recommendation-Application</h3>
            </div>
            <a href='https://github.com/coleaniblett/Distillation-Combination-Recommendation-Application'><img class="projectImg" src={DCRA}/></a>
            <div className="description">
              <ul>
                <li>Front-end web app built with React</li>
                <li>Utilizes TheCocktailDB API for user-customized drink recommendations</li>
              </ul>
            </div>
          </div>
          <div className="project" id="katoche">
            <div className="projectTitle">
              <h3>Katoche</h3>
            </div>
            <a href='https://github.com/coleaniblett/Katoche'><img class="projectImg" src={Katoche}/></a>
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
            <a href='https://github.com/coleaniblett/portfolio'><img class="projectImg" src={Portfolio}/></a>
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