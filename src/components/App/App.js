import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const isMobile = /Mobi/.test(navigator.userAgent);
const isPortrait = window.matchMedia("(orientation: portrait)").matches;

function App() {
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
