import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';



function App() {
  return (
    <div className='site'>
      <BrowserRouter> 
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects /> } />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
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