import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>
          Cole Niblett
        </h1>
        <nav>
          <a href="index.html">Home</a>
          <a href="education.html">Education</a>
          <a href="projects.html">Projects</a>
          <a href="experience.html">Experience</a>
        </nav>
      </header>
    );
  }
}

export default Navbar;