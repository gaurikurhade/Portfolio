import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional for styling

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
