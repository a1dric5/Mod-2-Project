import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
        <Link to='/'>
          <a href="Episodes">Episodes</a>
          </Link>
          <a href="#">Characters</a>
          <a href="#">News/Updates</a>
          <a href="#">Behind The Scenes</a>
          <a href="#">Merchandise</a>
          <a href="#">About</a>
        </nav>
        <p>&copy; 2023 Rick and Morty</p>
      </div>
    </footer>
  );
};

export default Footer;

