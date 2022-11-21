import logo from '../../logo.svg';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
