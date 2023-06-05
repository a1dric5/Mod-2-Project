import React from 'react';
import Episode from '../../components/Episode';
import './index.css';
import { Link } from 'react-router-dom';

const Home = ({ episodes }) => {
  const season1Episodes = episodes.filter((episode) => episode.episode[2] === "1");
  const season2Episodes = episodes.filter((episode) => episode.episode[2] === "2");

  console.log(season1Episodes);
  console.log(season2Episodes);

  return (
    <div className="home">
      <h1>Rick and Morty Episodes</h1>
      <div className="season1">
        <p>Season 1:</p>
        <div className="episodes-grid">
          {season1Episodes.map((episode) => (
            <div className="ImageAndEpTitle" key={episode.id}>
              <Link to={`/EpisodeDetails/${episode.id}`} className="blue-link">
                <Episode episode={episode} /> {/* Change prop name to 'episode' */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="season2">
        <p>Season 2:</p>
        <div className="episodes-grid">
          {season2Episodes.map((episode) => (
            <div className="ImageAndEpTitle" key={episode.id}>
              <Link to={`/EpisodeDetails/${episode.id}`} className="blue-link">
                <Episode episode={episode} /> {/* Change prop name to 'episode' */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;



