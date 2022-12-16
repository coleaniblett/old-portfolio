import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const isMobile = /Mobi/.test(navigator.userAgent);

function App() {
  return (
    <div className="App">
      {window.alert(`isMobile: ${isMobile}`)}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
