import React from 'react';
import './Projects.css';

class Projects extends React.Component {
  render() {
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
  }
}

export default Projects;