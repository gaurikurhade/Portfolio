import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Responsive Portfolio Website",
      desc: "A React-based portfolio showcasing my work with smooth animations and a modern layout.",
      link: "https://github.com/adityapatil/portfolio",
    },
    {
      title: "Drone Path Simulator",
      desc: "A Java simulation project that visualizes drone movement, records paths, and stores data in MySQL.",
    },
    {
      title: "Smart Drip Irrigation System",
      desc: "An IoT solution using moisture sensors to automate water distribution for different crops.",
    },
    {
      title: "Credit Card Recommender",
      desc: "A recommendation website suggesting the best credit card offers based on purchase types.",
    },
  ];

  return (
    <div className="projects-section">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p>{proj.desc}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
