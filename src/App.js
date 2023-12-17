import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/NavBar";
import Contact from './components/Contact';
import Skills from "./components/Skills";
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
    <Router>
      <Routes>
          <Route exact path="/"  element={<Main/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/skills" element={<Skills/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
