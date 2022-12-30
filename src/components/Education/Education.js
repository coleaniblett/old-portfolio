import React from 'react';
import './Education.css';

export function Education() {
  return (
    <div className="main-content">
      <h2 className="title">
        Education
      </h2>
      <div className="main-grid">
        <div className="grid-top-left, grid-left">
          <p>
            6/2022
          </p>
        </div>
        <div className="grid-top-right, grid-right">
          <p>
            <span>AA, Systems Programming</span>, De Anza College - Cupertino, CA
          </p>
          <ul>
            <li>3.96 Major GPA</li>
          </ul>
        </div>
      <div className="grid-bottom-left, grid-left">
        <p>
          5/2016
        </p>
      </div>
        <div className="grid-bottom-right, , grid-right">
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