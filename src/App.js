import {    Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Projects from './pages/Projects';
import Activities from './pages/Activities';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import './App.css'
function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
