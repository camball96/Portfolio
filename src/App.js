import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Bio from './components/Bio/Bio.jsx';
import Footer from './components/Footer/Footer.jsx';
import { CssVarsProvider } from '@mui/joy/styles';


function App() {
  return (
    <div className='site'>
      <Header/>
      <Hero/>
      <Bio />
      <Footer />
    </div>
  );
}

export default App;




/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/