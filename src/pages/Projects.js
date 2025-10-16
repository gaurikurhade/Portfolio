import React from 'react';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <strong>Portfolio Website</strong><br />
          Built using ReactJS. A personal site to showcase my work. 
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </li>
        <li>
          <strong>Weather App</strong><br />
          A React app that fetches live weather using OpenWeatherMap API.
        </li>
        <li>
          <strong>To-Do List</strong><br />
          A basic CRUD app made with React and localStorage.
        </li>
      </ul>
    </div>
  );
}

export default Projects;
