import React from "react";
import "../Projects.css";

const ProjectCard = ({ title, description, livePreview, image }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={livePreview} target="_blank" rel="noopener noreferrer">
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;