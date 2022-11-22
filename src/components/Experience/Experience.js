import React from 'react';
import './Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2 className="title">
          Experience
        </h2>
        <div className="main-grid">
          <div className="grid-top-left, grid-left">
            <p>
              4/2018 - 8/2021
            </p>
          </div>
          <div className="grid-top-right, grid-right">
            <p>
              3rd Grade Teacher, Challenger School Berryessa - San Jose, CA
            </p>
            <ul>
              <li>Prepared and delivered instruction in grammar, composition, literature, math, spelling/vocabulary, logic, history, science, and speech</li>
              <li>Worked closely with students and parents to support student success</li>
              <li>Brought underperforming students up to speed by identifying performance issues and implementing improvement plans tailored to student needs</li>
            </ul>
          </div>
          <div className="grid-bottom-left, grid-left">
            <p>
              12/2013 - 4/2016
            </p>
          </div>
          <div className="grid-bottom-right, , grid-right">
            <p>
              Political Campaign Aide, Multiple Campaigns - San Jose, CA
            </p>
            <ul>
              <li>Held a variety of responsibilities across three election cycles, with titles including <i>volunteer coordinator</i>, <i>deputy campaign manager</i>, and <i>campaign manager</i></li>
              <li>Led a 200+ volunteer program for a San Jose mayoral campaign that resulted in an Election Day victory</li>
              <li>Recruited and managed a team of employees and volunteers for a San Jose council campaign that resulted in an Election Day victory</li>
              <li>Produced written documents, including responses to candidate policy questionnaires, internal training guides, email campaigns, and public-facing campaign literature</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;