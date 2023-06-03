import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Episode from '../../components/Episode';
import './index.css';

const EpisodeDetails = ({episodes}) => {
    const params = useParams();
    let id = +params.episodeId
    let currentEpisode = episodes.find((episode) => {
        console.log(episode.id, id)
      return episode.id === id
    })
    console.log(params)

   const [characterInfo, setcharacterInfo] = useState(null);
//    const [youtubeURL, setyoutubeURL] = useState(null); 
   const [selectedAnswer, setSelectedAnswer] = useState('');
   const [isAnswered, setIsAnswered] = useState(false);
   const [isCorrect, setIsCorrect] = useState(false);

    console.log(currentEpisode)

    useEffect(() => {
        const fetchRandomCharacter = async () => {
          const randomNumber = Math.floor(Math.random() * currentEpisode.characters.length);
          const randomCharacterUrl = currentEpisode.characters[randomNumber];
          try {
            const response = await axios.get(randomCharacterUrl);
            const character = response.data;
            setcharacterInfo(character);
          } catch (error) {
            console.log('Error fetching character:', error);
          }
        };
    
        fetchRandomCharacter();
      }, [currentEpisode]);
      
    //   useEffect(() => {
    //     const options = {
    //       method: 'GET',
    //       url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    //       params: {
    //         q: `Rick+and+Morty+${currentEpisode.name}`
    //       },
    //       headers: {
    //         'X-RapidAPI-Key': '19ab945e00msh56db59b4a87f447p1a4e2cjsn05122e96bd8c',
    //         'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    //       }
    //     };
      
    //     axios(options).then((response) => {
    //       let videoItem = response.data.items.find((item) => item.type === 'video');
    //       if (videoItem) {
    //         const videoId = videoItem.id;
    //         const youtubeURL = `https://youtube.com/${videoId}/autoplay=1`;
    //         setyoutubeURL(youtubeURL);
    //         console.log(youtubeURL);
    //       } else {
    //         console.log('No video item found.');
    //       }
    //     });
    //   }, []);
                
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

      const episodeSummary = {
        'Pilot': `A strangely eccentric genius scientist and inventor moves into the home of his daughter and her family and begins to strongly influence his young grandson.`,
        'Lawnmower Dog': `Rick helps Jerry out with the dog.`,
        'Anatomy Park': `It's Christmas. Rick shrinks Morty, injecting him into a homeless man to save Anatomy Park. Jerry tries to have a Christmas free of electronic devices, but regrets his decision when his parents introduce him to their new friend.`,
        'M. Night Shaym-Aliens!': `Rick and Morty try to get to the bottom of a mystery in this M. Night Shamyaloin style twistaroony of an episode! (Guest starring David Cross)`,
        'Meeseeks and Destroy': `Rick provides the family with a solution to their problems, freeing him up to go on an adventure led by Morty. Sounds good, btter record this one, broh!`,
        'Rick Potion #9': `After Rick gives Morty a love potion for a school dance, things quickly spiral out of control when the serum splices with the flu - causing it to spread. Rick and Morty scramble to cure the crisis, making matters worse in the process.`,
        'Raising Gazorpazorp': `Morty becomes a father to an alien baby, while Rick and Summer get trapped in a dangerous dimension.`,
        'Rixty Minutes': `Rick hooks up the family's TV with interdimensional cable, allowing them to watch infinite TV from across the multiverse.`,
        'Something Ricked This Way Comes': `Summer gets a job at a pawn shop owned by the devil. Jerry helps Morty with his science fair project.`,
        'Close Rick-counters of the Rick Kind': `Rick, falsely blamed for Murder by the council of Ricks, begins a cross-dimensional pursuit with the authorities while attempting to prove his innocence.`,
        'Ricksy Business': `Beth and Jerry head for an iceberg of a date leaving Rick in charge. Morty doesn't get to go on any more adventures if the house isn't in the same condition when they get back.`
      }

      const episodeQuiz = {
        'Pilot': `What iconic catchphrase does Rick frequently say throughout the episode?`,
        'Lawnmower Dog': `Which character becomes highly intelligent in the dream world, leading to chaos?`,
        'Anatomy Park': `What disease threatens to destroy Anatomy Park in the episode?`,
        'M. Night Shaym-Aliens!': `What does Rick discover about the Zigerions' technology in the simulation?`,
        'Meeseeks and Destroy': `What phrase does the sentient sex robot, designed by Rick, keep repeating?`,
        'Rick Potion #9': `What famous historical figure appears as a mutated version of himself in the episode?`,
        'Raising Gazorpazorp': `In the episode "Raising Gazorpazorp," Morty accidentally impregnates an alien sex robot from which planet?`,
        'Rixty Minutes': `What does Rick rename the family's favorite TV show "Ball Fondlers" to?`,
        'Something Ricked This Way Comes': `What does Jerry wish for when he finds a cursed monkey's paw in the store?`,
        'Close Rick-counters of the Rick Kind': ` What is the main objective of the Rick from Dimension J19ζ7, also known as "Doofus Rick"?`,
        'Ricksy Business': ` What is the name of the song that Rick sings at the party?`        
      };

      const allEpisodeQuizAnswers = {
        'Pilot': ["Wubba lubba dub dub!", "Schwifty time!", "Get schwifty!", "I'm pickle Rick!"],
        'Lawnmower Dog': ["Jerry", "Summer", "Snuffles/Snowball", "Beth"],
        'Anatomy Park': ["Hepatitis C", "Influenza", "Measles", "The bubonic plague"],
        'M. Night Shaym-Aliens!': ["It is powered by interdimensional energy", "It can create illusions of any kind", "It is easily disrupted by burps", "It has a flaw in its holographic projector"],
        'Meeseeks and Destroy': ["Existence is pain!", "I'm Mr. Meeseeks, look at me!", "Time to fulfill your wishes!", "Let's get schwifty!"],
        'Rick Potion #9': ["Albert Einstein", "Abraham Lincoln", "Cleopatra", "Leonardo da Vinci"],
        'Raising Gazorpazorp': ["Blumpflop", "Spleeblob", "Gazorpazorp", "Flargen"],
        'Rixty Minutes': ["Fondle My Balls", "Ball Grabbers", "Scrotal Stimulation", "Testicular Tension"],
        'Something Ricked This Way Comes': ["Wealth and success", "Super strength", "A pony", "A good sandwich"],
        'Close Rick-counters of the Rick Kind': ["To take over the Citadel of Ricks", "To eradicate all Mortys", "To create a device that turns everyone into idiots", "To find the perfect recipe for strawberry syrup"],
        'Ricksy Business': ["Get Schwifty", "Ricky's Raging Anthem", "Party All Night Long", "Wubba Lubba Dub Dub Jam"]
      };
      

      const episodeQuizAnswer = {
        'Pilot': 'Wubba lubba dub dub!',
        'Lawnmower Dog': 'Snuffles/Snowball',
        'Anatomy Park': 'Hepatitis C',
        'M. Night Shaym-Aliens!': 'It is easily disrupted by burps',
        'Meeseeks and Destroy': 'I\'m Mr. Meeseeks, look at me!',
        'Rick Potion #9': 'Abraham Lincoln',
        'Raising Gazorpazorp': 'Gazorpazorp',
        'Rixty Minutes': 'Fondle My Balls',
        'Something Ricked This Way Comes': 'A good sandwich',
        'Close Rick-counters of the Rick Kind': 'To find the perfect recipe for strawberry syrup',
        'Ricksy Business': 'Get Schwifty'
      };
      
    
      const handleButtonClick = (answer) => {
        setSelectedAnswer(answer);
      };
      
      
      const checkAnswer = () => {
        const correctAnswer = episodeQuizAnswer[currentEpisode.name];
        setIsCorrect(selectedAnswer === correctAnswer);
        setIsAnswered(true);
      };
              
      
    const resetQuiz = () => {
        setSelectedAnswer('');
        setIsAnswered(false);
        setIsCorrect(false);
      
    };

    const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

    
return (
<div className="EpisodeDetailsContainer">
  {/* <iframe src="https://www.youtube.com/embed/tTLAoI-wlAc/?autoplay=1"></iframe> */}

  
    <div className="EpiImageTitleAirDate">
    <img className="EpisodeImage" src={imageUrl} />
    <div className="EpisodeTitleAndAirDate">
    <p className="EpisodeTitle">Episode Title: {currentEpisode.name}</p>
    <p className="AirDate">Air Date: {currentEpisode.air_date}</p>
    </div>
    </div>

    <p className="EpisodeSummary">
      Episode Summary:
      <div className="EpisodeSummaryText">{episodeSummary[currentEpisode.name]}</div>
    </p>


  <div className="WhosThatCharacterAndQuiz">
    {characterInfo && (
      <div>
        <div className="WhosThatCharacter">
        <div className="WhosThatCharacterText">Who's that character?</div>
        <div className="WhosThatCharacterInfo">
        <div>
        <p>Name: {characterInfo.name}
        <br></br>
        Gender: {characterInfo.gender}
        <br></br>
        Species: {characterInfo.species}</p>
        <br></br>
        </div>
        </div>
        </div>
        
      {characterInfo && <img src={characterInfo.image} alt="Character Image" className="CharacterImage"/>}
        {/* Add other properties I want to display */}
      </div>
    )}

{/* <div className="EpisodeQuizQuestion">
</div> */}

  <div className="episodeQuiz">
      <p>Episode Quiz: Test your knowledge!</p>
      {episodeQuiz[currentEpisode.name]}
      <br />

      {isAnswered ? (
        <div>
          {isCorrect ? <p>Correct! Good job!</p> : <p>Incorrect! Try again.</p>}
          <button onClick={() => setIsAnswered(false)}>Reset Quiz</button>
        </div>
      ) : (
        <div>
          {/* <ul className="QuizAnswers">
            {allEpisodeQuizAnswers[currentEpisode.name].map((answer, index) => (
              <div key={index}>
                <button onClick={() => handleButtonClick(answer)}>
                  {answer}
                </button>
              </div>
            ))}
          </ul> */}

<ul className="quizAnswers">
  {allEpisodeQuizAnswers[currentEpisode.name].map((answer, index) => (
    <li key={index} className="quizAnswerItem">
      <button onClick={() => handleButtonClick(answer)}>{answer}</button>
    </li>
  ))}
</ul>

<button onClick={checkAnswer} className="submitButton">Submit Answer</button>
        </div>
      )}
    </div>
    </div>

  <br />

  {/* <div className="home">
    <h1>Rick and Morty Episodes</h1>
    <div className="Season-1-Container">
      <p>Season 1:</p>

      <div className="episodes-grid">
        {episodes.map((episode) => (
          <div key={episode.id}>
            <Link to={`/EpisodeDetails/${episode.id}`} className="blue-link">
              <Episode episode={episode} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div> */}
</div>
);
};

export default EpisodeDetails;



