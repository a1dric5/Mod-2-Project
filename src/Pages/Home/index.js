import React, { useEffect, useState } from 'react';
import Episode from '../Episode';
import "./index.css";
import axios from 'axios';

    // accept episodes as props.episodes  or {episodes}

    // map through episodes and return something for each episode

    const Home = () => {
      const [episodes, setEpisodes] = useState([]);
    
      useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')
          .then(response => setEpisodes(response.data));
      }, []);
    
      return (
        <div className="home">
          <h1>Rick and Morty Episodes</h1>
          <div className="episodes-grid">
            {episodes.map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      );
    };
    
    export default Home;



