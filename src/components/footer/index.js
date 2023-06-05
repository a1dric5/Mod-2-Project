import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Link to="/">Episodes</Link>
          <Link to="/Characters">Characters</Link>
          <Link to="/News">News/Updates</Link>
          <Link to="/BehindTheScenes">Behind The Scenes</Link>
          <Link to="/Merchandise">Merchandise</Link>
          <Link to="/About">About</Link>
        </nav>
        <p>&copy; 2023 Rick and Morty</p>
      </div>
    </footer>
  );
};

export default Footer;


