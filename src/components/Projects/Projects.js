import React from 'react';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div class="main-content">
        <h2 class="title">
          Projects
        </h2>
        <div class="main-grid">
          <div class="grid-top-left, grid-left">
            <p>
              Katoche (C++)
            </p>
          </div>
          <div class="grid-top-right">
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