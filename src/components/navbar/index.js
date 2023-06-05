import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="HeaderArea">
      <div className="HeaderContent1">
        <Link to="/">
          <img className="HeaderLogo" src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" height="200px" alt="Rick & Morty Logo" />
        </Link>
        <div className="HeaderContent2">
          <Link to="/">Episodes</Link>
          <Link to="/Characters">Characters</Link>
          <Link to="/News">News</Link>
          <Link to="/BehindTheScenes">Behind The Scenes</Link>
          <Link to="/Merchandise">Merchandise</Link>
          <Link to="/About">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;



