// import React, { useContext } from 'react'
// import { mainContext } from '../../contexts'
import React from 'react'
import './index.css'

const Nav = () => {
    return (
      <div className="header-area">
          {/* <h1>Rick & Morty </h1> */}
          <img className = "HeaderLogo" src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png"  height="200px"  alt="Rick & Morty Logo" />
        {/* <div className="nav-button" onClick={() => setEpisodeToDisplay(null)}>Home</div>
        <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[0])}>Episode 1</div>
        <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[1])}>Episode 2</div>
        <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[2])}>Episode 3</div>
       */}
      </div>
    )
  }
  
  export default Nav;

    // let { episodesData, setEpisodeToDisplay } = useContext(mainContext)

//   return (
//     <nav>
//         {/* <div className="nav-button" onClick={() => setEpisodeToDisplay(null)}>Home</div>
//         <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[0])}>Episode 1</div>
//         <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[1])}>Episode 2</div>
//         <div className="nav-button" onClick={() => setEpisodeToDisplay(episodeData[2])}>Episode 3</div>
//        */}
//     </nav>
//   )


