import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Rick and Morty</p>
        <nav className="footer-nav">
          <a href="#">Episodes</a>
          <a href="#">Characters</a>
          <a href="#">News/Updates</a>
          <a href="#">Behind The Scenes</a>
          <a href="#">Merchandise</a>
          <a href="#">About</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

