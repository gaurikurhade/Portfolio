import React from 'react';
import './Home.css'; // for styling

function Home() {
  return (
    <div className="home-container">
      <img src="/profile.jpg" alt="Gauri Kurhade" className="profile-photo" />
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi! I'm <strong>Gaurii</strong>, a passionate developer focused on web technologies.
        I love creating modern, responsive, and user-friendly projects.
      </p>
    </div>
  );
}

export default Home;
