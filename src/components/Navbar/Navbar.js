import React from 'react';
import './Navbar.css';

export const Navbar = (props) => {
  const handleClick = (content) => {
    props.onContentChange(content);
  }

  return (
    <div>
      <header>
        <h1>
          Cole Niblett
        </h1>
        <nav>
          <a onClick={() => handleClick("home")}>Home</a>
          <a onClick={() => handleClick("education")}>Education</a>
          <a onClick={() => handleClick("projects")}>Projects</a>
          <a onClick={() => handleClick("experience")}>Experience</a>
        </nav>
      </header>
    </div>
  );
}