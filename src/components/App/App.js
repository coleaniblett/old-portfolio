import logo from '../../logo.svg';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
