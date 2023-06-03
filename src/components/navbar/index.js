import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="HeaderArea">
        <div className="HeaderContent1">
          <Link to='/'>
          <img className = "HeaderLogo" src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"  height="200px"  alt="Rick & Morty Logo" />
          </Link>
          <div className="HeaderContent2">
            <Link to='/'>
          <a href="Episodes">Episodes</a>
          </Link>
          <a href="Characters">Characters</a>
          <a href="News">News</a>
          <a href="Behind The Scenes">Behind The Scenes</a>
          <a href="Merchandise">Merchandise</a>
          <a href="About">About</a>
        </div>
        </div>
      </div>
    )
  }
  
  export default Nav;


