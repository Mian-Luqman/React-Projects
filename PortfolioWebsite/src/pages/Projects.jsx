import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../index.css";

const Projects = () => {
  const projects = {
    htmlCss: [
      {
        title: "Comfort Zone Blogging Website",
        description: "A simple 2-page blogging website with a clean and responsive design.",
        livePreview: "https://html-css-projects-ssv4.vercel.app",
        image: "/images/ComfortZone.png" // Replace with your actual image path
      },
      {
        title: "Landing Page",
        description: "Created a modern and responsive landing page for showcasing services or products.",
        livePreview: "https://html-css-projects-jdfm.vercel.app/",
        image: "/images/Landingpage.png"
      },
      {
        title: "Professional Tasty Bakery Café",
        description: "Designed an engaging website for a bakery café with a professional layout.",
        livePreview: "https://html-css-projects-28md.vercel.app",
        image: "/images/tastybakerycafe.png"
      }
    ],
    htmlCssBootstrap: [
      {
        title: "E-commerce Website",
        description: "Built a fully responsive e-commerce website using Bootstrap utilities.",
        livePreview: "https://html-css-with-bootstrap-wkvb.vercel.app",
        image: "/images/Ecommerce.png"
      },
    ],
    javascript: [
      {
        title: "Rock Paper Scissor Game",
        description: "A fun and interactive game built with JavaScript to practice DOM manipulation.",
        livePreview: "https://java-script-projects-xuqw.vercel.app",
        image: "/images/download (3).png"
      },
      {
        title: "To-Do List",
        description: "A dynamic and responsive to-do list application to add, edit, and delete tasks.",
        livePreview: "https://java-script-projects-ocvu.vercel.app",
        image: "/images/download (2).png"
      },
      {
        title: "Weather App",
        description: "Created a weather app using JavaScript that fetches real-time data from an API.",
        livePreview: "https://java-script-projects-vy4g.vercel.app",
        image: "/images/download (4).png"
      },
      {
        title: "Quiz Project",
        description: "Built an interactive quiz application with multiple-choice questions and score tracking.",
        livePreview: "https://java-script-projects-kxsh.vercel.app",
        image: "/images/download (5).png"
      },
    ],
    react: [
      {
        title: "Password Generator",
        description: "Developed a password generator using React to create strong and secure passwords.",
        livePreview: "https://react-projects-13tu.vercel.app",
        image: "/images/download (6).png"
      },
      {
        title: "Currency Converter",
        description: "A responsive currency converter that fetches real-time exchange rates via an API.",
        livePreview: "https://react-projects-89vj.vercel.app",
        image: "/images/download (7).png"
      },
      {
        title: "Registration Form with Authentication",
        description: "Built a complete registration form with authentication and validation functionality.",
        livePreview: "https://booking-tracking-services-project.vercel.app",
        image: "/images/Formimage.png"
      },
      {
        title: "React Context API & Router Project",
        description: "Created a multi-page application using React Context API and Router for state management.",
        livePreview: "https://react-projects-4eyl.vercel.app",
        image: "/images/download (8).png"
      },
    ]
  };

  return (
    <div className="projects">
      <div className="container">
        <h2>My Projects</h2>
        
        <section className="project-section">
          <h3>HTML & CSS Projects</h3>
          <div className="project-grid">
            {projects.htmlCss.map((project, index) => (
              <ProjectCard key={`html-${index}`} {...project} />
            ))}
          </div>
        </section>

        <section className="project-section">
          <h3>HTML, CSS & Bootstrap Projects</h3>
          <div className="project-grid">
            {projects.htmlCssBootstrap.map((project, index) => (
              <ProjectCard key={`bootstrap-${index}`} {...project} />
            ))}
          </div>
        </section>

        <section className="project-section">
          <h3>JavaScript Projects</h3>
          <div className="project-grid">
            {projects.javascript.map((project, index) => (
              <ProjectCard key={`js-${index}`} {...project} />
            ))}
          </div>
        </section>

        <section className="project-section">
          <h3>React Projects</h3>
          <div className="project-grid">
            {projects.react.map((project, index) => (
              <ProjectCard key={`react-${index}`} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;