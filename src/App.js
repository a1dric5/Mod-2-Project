import './App.css';
import Nav from './components/navbar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Episode from './components/Episode';
import EpisodeDetails from './Pages/EpisodeDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/footer';


function App() {
  // make episodes statehere
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  // make useEffect here
  // axios to API to get episode info
  // setEpisodes(res.data)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
      console.log(response.data);

      let season1Episodes = response.data.results.filter((episode) => episode.episode[2] == "1")
      let season2Episodes = response.data.results.filter((episode) => episode.episode[2] == "2")
      let season3Episodes = response.data.results.filter((episode) => episode.episode[2] == "3")
      let season4Episodes = response.data.results.filter((episode) => episode.episode[2] == "4")
      let season5Episodes = response.data.results.filter((episode) => episode.episode[2] == "5")

      console.log(season1Episodes);


      setEpisodes(season1Episodes);
    })
    
    // axios.get('https://rickandmortyapi.com/api/character').then((response) => {
    //   console.log(response.data);

    //   let season1Characters = response.data.results.filter((character) => character.character)
    // });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home episodes={episodes} />} />
          <Route path="/EpisodeDetails/:episodeId" element={<EpisodeDetails episodes={episodes} />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;