import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import "../Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="main-title">Front end Developer</h1>
        <p className="subtitle">Fond of creating web application and bringing them to life using code & develop mobile designs.</p>
      </div>
      
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <FaHtml5 className="skill-icon html" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon css" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <FaBootstrap className="skill-icon bootstrap" />
            <span>Bootstrap</span>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon javascript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon react" />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;