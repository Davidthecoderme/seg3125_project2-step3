import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Champions from './pages/Champions.js';
import Guides from './pages/Guides';
import Community from './pages/Community';
import JoinUs from './pages/JoinUs';
import Logo from './photos/logo.png'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src={ Logo} alt="Logo" />
            <h1>LoLProClub</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/champions">Champions</Link>
            <Link to="/guides">Guides</Link>
            <Link to="/community">Community Page</Link>
            <Link to="/join">Join Us</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/community" element={<Community />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
        <footer>
          <p>follow us: LoLProClub@instagram.com</p>
          <p><a href="#privacy">Privacy Policy</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;