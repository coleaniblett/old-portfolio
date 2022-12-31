import React from 'react';
import './Navbar.css';

export const Navbar = (props) => {
  const handleClick = (content) => {
    props.onContentChange(content);
  }

  return (
    <div className="navbar-fluid">
      <header>
        <h1 className="row">
          <strong>Cole Niblett</strong>
        </h1>
        <nav className="row justify-content-center">
          <a href="#home" className="col-1 text-decoration-none text-white m-2 p-0" onClick={() => handleClick("home")}>Home</a>
          <a href="#education" className="col-1 text-decoration-none text-white m-2 p-0" onClick={() => handleClick("education")}>Education</a>
          <a href="#projects" className="col-1 text-decoration-none text-white m-2 p-0" onClick={() => handleClick("projects")}>Projects</a>
          <a href="#experience" className="col-1 text-decoration-none text-white m-2 p-0" onClick={() => handleClick("experience")}>Experience</a>
        </nav>
      </header>
    </div>
  );
}