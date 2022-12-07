import React from 'react';
import './Main.css';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mainContent:(<Home />), test:"Test" };
    this.handleEducationClick = this.handleEducationClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleProjectsClick = this.handleProjectsClick.bind(this);
    this.handleExperienceClick = this.handleExperienceClick.bind(this);
  }

  handleHomeClick() {
    this.setState({mainContent:(<Home />)});
  }

  handleEducationClick() {
    this.setState({mainContent:(<Education />)});
  }

  handleProjectsClick() {
    this.setState({mainContent:(<Projects />)});
  }

  handleExperienceClick() {
    this.setState({mainContent:(<Experience />)});
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            Cole Niblett
          </h1>
          <nav>
            <button onClick={this.handleHomeClick}>Home</button>
            <button onClick={this.handleEducationClick}>Education</button>
            <button onClick={this.handleProjectsClick}>Projects</button>
            <button onClick={this.handleExperienceClick}>Experience</button>
          </nav>
        </header>
        {this.state.mainContent}
      </div>
    );
  }
}

export default Main;