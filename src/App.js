import logo from './bunnylogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: '1em'}}> Andi's Coding Portfolio</h1>
        <h2 style={{ fontSize: '0.8em'}}> Later this will be a portfolio for all my STEM stuff!</h2>
        <div>
          <a
          className="App-link"
          href="https://andi-counter-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            My Counter App!
          </a>
          <a
          className="App-link"
          href="https://tutoring-hub-cyan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            My Tutoring Hub App!
          </a>  
        </div>
      </header>
    </div>
  );
}

export default App;
