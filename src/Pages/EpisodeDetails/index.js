import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EpisodeDetails = ({episodes}) => {
    const params = useParams();
    let id = +params.episodeId
    let currentEpisode = episodes.find((episode) => {
        console.log(episode.id, id)
      return episode.id === id
    })
    console.log(params)

   const [characterInfo, setcharacterInfo] = useState(null);
    console.log(currentEpisode)
    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * currentEpisode.characters.length);
        let randomCharacter = currentEpisode.characters[randomNumber]
        console.log(randomCharacter);
        axios.get(randomCharacter).then((response) => {
            console.log(response.data);
        })
        // setEpisodes(response)
    })

    const episodeImages = {
        'Pilot': 'https://cdni.fancaps.net/file/fancaps-tvimages/20655.jpg',
        'Lawnmower Dog': 'https://cdni.fancaps.net/file/fancaps-tvimages/20472.jpg',
        'Anatomy Park': 'https://cdni.fancaps.net/file/fancaps-tvimages/21697.jpg',
        'M. Night Shaym-Aliens!': 'https://cdni.fancaps.net/file/fancaps-tvimages/22512.jpg',
        'Meeseeks and Destroy': 'https://cdni.fancaps.net/file/fancaps-tvimages/22854.jpg',
        'Rick Potion #9': 'https://cdni.fancaps.net/file/fancaps-tvimages/23706.jpg',
        'Raising Gazorpazorp': 'https://cdni.fancaps.net/file/fancaps-tvimages/24230.jpg',
        'Rixty Minutes': 'https://cdni.fancaps.net/file/fancaps-tvimages/25017.jpg',
        'Something Ricked This Way Comes': 'https://cdni.fancaps.net/file/fancaps-tvimages/25599.jpg',
        'Close Rick-counters of the Rick Kind': 'https://cdni.fancaps.net/file/fancaps-tvimages/26268.jpg',
        'Ricksy Business': 'https://cdni.fancaps.net/file/fancaps-tvimages/27085.jpg'
      };
      const imageUrl = episodeImages[currentEpisode.name];

      
  return (
    <div>
        <img className="EpisodeImage" src={imageUrl}/>
        <p>Episode Title: {currentEpisode.name}</p>
        <p>Air Date: {currentEpisode.air_date}</p>
        <div>
            Random Character Information Here: 
        </div>
    </div>
  )
}

export default EpisodeDetails


