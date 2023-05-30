// import React, { useEffect, useState } from 'react';
// import Episode from '../Episode';
// import "./index.css";
// import axios from 'axios';

//     // accept episodes as props.episodes  or {episodes}

//     // map through episodes and return something for each episode

//     const Home = () => {
//       const [episodes, setEpisodes] = useState([]);
    
//       useEffect(() => {
//         axios.get('https://rickandmortyapi.com/api/episode')
//           .then(response => {
//             console.log(response.data)
//             let arrayAll = response.data.results;
//             let arrayFirstSeason = [
//              { id:1, episode: "S01E01", name: "Pilot" },
//              { id:2, episode: "S01E02" , name: "Lawnmower Dog" },
//              { id:3, episode: "S01E03" , name: "Anatomy Park" },
//              { id:4, episode: "S01E04" , name: "M. Night Shaym-Aliens!" },
//              { id:5, episode: "S01E05" , name: "Meeseeks and Destroy"},
//              { id:6, episode: "S01E06" , name: "Rick Potion #9"},
//              { id:7, episode: "S01E07" , name: "Raising Gazorpazorp"},
//              { id:8, episode: "S01E08" , name: "Rixty Minutes"},
//              { id:9, episode: "S01E09" , name: "Something Ricked This Way Comes"},
//              { id:10, episode: "S01E010" , name: "Close Rick-counters of the Rick Kind"},
//              { id:11, episode: "S01E011" , name: "Ricksy Business" },
//             ]

//             let searchString = arrayFirstSeason; 
//             let season1Episodes = episodes.filter((episode) => episode.name.indexOf(searchString) !== -1);
//             console.log(season1Episodes); 
//             setEpisodes(response.data.results)
//         });
//       }, []);
    
//       return (
//         <div className="home">
//           <h1>Rick and Morty Episodes</h1>
//           <div className="episodes-grid">
//             {episodes.map((episode) => (
//               <Episode key={episode.id} episode={episode} />
//             ))}
//           </div>
//         </div>
//       );
//     };
    
//     export default Home;


import React, { useEffect, useState } from 'react';
import Episode from '../Episode';
import './index.css';
import axios from 'axios';

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
      console.log(response.data);
      let arrayFirstSeason = [
        { id: 1, episode: 'S01E01', name: 'Pilot' },
        { id: 2, episode: 'S01E02', name: 'Lawnmower Dog' },
        { id: 3, episode: 'S01E03', name: 'Anatomy Park' },
        { id: 4, episode: 'S01E04', name: 'M. Night Shaym-Aliens!' },
        { id: 5, episode: 'S01E05', name: 'Meeseeks and Destroy' },
        { id: 6, episode: 'S01E06', name: 'Rick Potion #9' },
        { id: 7, episode: 'S01E07', name: 'Raising Gazorpazorp' },
        { id: 8, episode: 'S01E08', name: 'Rixty Minutes' },
        { id: 9, episode: 'S01E09', name: 'Something Ricked This Way Comes' },
        { id: 10, episode: 'S01E010', name: 'Close Rick-counters of the Rick Kind' },
        { id: 11, episode: 'S01E011', name: 'Ricksy Business' },
      ];

      let season1Episodes = response.data.results.filter((episode) =>
        arrayFirstSeason.some((seasonEpisode) => episode.name.includes(seasonEpisode.name))
      );

      console.log(season1Episodes);
      setEpisodes(season1Episodes);
    });

    let arraySecondSeason = [
        { id: 12, episode: 'S02E01', name: 'A Rickle in Time' },
        { id: 13, episode: 'S02E02', name: 'Mortynight Run' },
        { id: 14, episode: 'S02E03', name: 'Auto Erotic Assimilation' },
        { id: 15, episode: 'S02E04', name: 'Total Rickall' },
        { id: 16, episode: 'S02E05', name: 'Get Schwifty' },
        { id: 17, episode: 'S02E06', name: 'The Ricks Must Be Crazy' },
        { id: 18, episode: 'S02E07', name: 'Big Trouble in Little Sanchez' },
        { id: 19, episode: 'S02E08', name: 'Interdimensional Cable 2: Tempting Fate' },
        { id: 20, episode: 'S02E09', name: `Look Who's Purging Now` },
        // missing two more episodes 
    ];

    let season2Episodes = response.data.results.filter((episode) =>
        arraySecondSeason.some((seasonEpisode) => episode.name.includes(seasonEpisode.name))
        );

        console.log(season2Episodes);
        setEpisodes(season2Episodes);
  }, []);

  return (
    <div className="home">
      <h1>Rick and Morty Episodes</h1>
      <div className="Season-1-Container">
      <p>Season 1:</p>
      <br></br>
      <div className="episodes-grid">
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </div>
    </div>

    <br></br>

    <div className="Season-2-Container">
        <p>Season 2:</p>
        <br></br>
        <div className="episodes-grid">
        {episodes.map((episode) => (
          <Episode key={episode.id} episode={episode} />
        ))}
      </div>

    </div>
    </div>
  );
};

export default Home;

