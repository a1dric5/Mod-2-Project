import React from 'react'

const Episode = ({episode}) => {
  const episodeImages = {
    //season1
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
    'Ricksy Business': 'https://cdni.fancaps.net/file/fancaps-tvimages/27085.jpg',
    
    //season2
    'A Rickle in Time': 'https://cdni.fancaps.net/file/fancaps-tvimages/115102.jpg',
    'Mortynight Run': 'https://cdni.fancaps.net/file/fancaps-tvimages/116060.jpg',
    'Auto Erotic Assimilation': 'https://cdni.fancaps.net/file/fancaps-tvimages/116481.jpg',
    'Total Rickall': 'https://cdni.fancaps.net/file/fancaps-tvimages/117173.jpg',
    'Get Schwifty': 'https://cdni.fancaps.net/file/fancaps-tvimages/117833.jpg',
    'The Ricks Must Be Crazy': 'https://cdni.fancaps.net/file/fancaps-tvimages/118657.jpg',
    'Big Trouble in Little Sanchez': 'https://cdni.fancaps.net/file/fancaps-tvimages/119320.jpg',
    'Interdimensional Cable 2: Tempting Fate': 'https://cdni.fancaps.net/file/fancaps-tvimages/119858.jpg',
    'Look Who\'s Purging Now': 'https://cdni.fancaps.net/file/fancaps-tvimages/120679.jpg'
  };
  const imageUrl = episodeImages[episode.name];


  return (
    <div className="EpisodeTitle">
      <img src={imageUrl} alt={episode.name} />
      <span>{episode.name}</span>
    </div>
  );
  
}

export default Episode;
