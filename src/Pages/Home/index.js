import React, { useEffect, useState } from 'react';
import Episode from '../../components/Episode';
import './index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({episodes}) => {
  

  return (
    <div className="home">
      <h1>Rick and Morty Episodes</h1>
      <div className="Season-1-Container">
      <p>Season 1:</p>

      <div className="episodes-grid">
        {episodes.map((episode) => (
            <div key={episode.id}>
                <Link to={`/EpisodeDetails/${episode.id}`} className="blue-link">
                    <Episode episode={episode}/>
                </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;

