import React from 'react';
import './Education.css';

class Education extends React.Component {
  render() {
    return (
      <div class="main-content">
        <h2 class="title">
          Education
        </h2>
        <div class="main-grid">
          <div class="grid-top-left, grid-left">
            <p>
              6/2022
            </p>
          </div>
          <div class="grid-top-right, grid-right">
            <p>
              <span>AA, Systems Programming</span>, De Anza College - Cupertino, CA
            </p>
            <ul>
              <li>3.96 Major GPA</li>
            </ul>
          </div>
        <div class="grid-bottom-left, grid-left">
          <p>
            5/2016
          </p>
        </div>
          <div class="grid-bottom-right, , grid-right">
            <p>
              <span>BA, Political Science</span>, San Jose State University - San Jose, CA
            </p>
            <ul>
              <li>Board Member, Associated Students (Two terms)</li>
              <li>President, College Democrats</li>
              <li>Graduated <i>cum laude</i></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;