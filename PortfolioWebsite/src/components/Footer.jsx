import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

 const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a 
            href="https://github.com/Mian-Luqman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/mian-luqman-0a84b9347/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <p>© 2024 Mian Luqman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;