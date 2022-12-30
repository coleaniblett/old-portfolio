import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Education } from '../Education/Education';
import { Projects } from '../Projects/Projects';
import { Experience } from '../Experience/Experience';
import { Footer } from '../Footer/Footer';

const isMobile = /Mobi/.test(navigator.userAgent);
const isPortrait = window.matchMedia("(orientation: portrait)").matches;

function App() {
  const [content, setContent] = useState("home");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  }

  return (
    <div className="App">
      <Navbar onContentChange={handleContentChange} />
      {content === "home" && <Home />}
      {content === "education" && <Education />}
      {content === "projects" && <Projects />}
      {content === "experience" && <Experience />}
      <Footer />
    </div>
  );
}

export default App;
