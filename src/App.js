import './App.css';
import Nav from './components/navbar';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import EpisodeDetails from './Pages/EpisodeDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/footer';


function App() {
  // make episodes statehere
  const [episodes, setEpisodes] = useState([]);

  // make useEffect here
  // axios to API to get episode info
  // setEpisodes(res.data)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode').then((response) => {
      console.log(response.data);

      let season1Episodes = response.data.results.filter((episode) => episode.episode[2] == "1")


      console.log(season1Episodes);


      setEpisodes(season1Episodes);
    })
    

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