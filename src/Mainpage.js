import React from 'react';
import { Link } from 'react-router-dom';
import StoryBar from './components/StoryBar';
import Home from './Home';
import videoGame1 from './assets/EldenRing.webp';
import videoGame2 from './assets/rust.jpg'
import movie1 from './assets/interstellar.jpg';
import movie2 from './assets/john.jpg'
import tv1 from './assets/ArcaneJinx.jpg';
import tv2 from './assets/twd.jpg'
import boardGame1 from './assets/JokingHazard.jpg';
import boardGame2 from './assets/cah.jpg';

const Mainpage = () => {
  const storiesTop = [
    { imageSrc: videoGame1, title: 'Elden Ring', type: 'Type: Video Game', id: 1 },
    { imageSrc: movie1, title: 'Interstellar', type: 'Type: Movie', id: 2 },
    { imageSrc: tv1, title: 'Arcane', type: 'Type: TV-Show', id: 3 },
    { imageSrc: boardGame1, title: 'Joking Hazard', type: 'Type: Board Game', id: 4 },
  ];
  const storiesBottom = [
    { imageSrc: videoGame2, title: 'Rust', type: 'Type: Video Game', id: 1 },
    { imageSrc: movie2, title: 'John Wick', type: 'Type: Movie', id: 2 },
    { imageSrc: tv2, title: 'The Walking Dead', type: 'Type: TV-Show', id: 3 },
    { imageSrc: boardGame2, title: 'Cards Against Humanity', type: 'Type: Board Game', id: 4 },
  ];

  return (
    <div className='content'>
      <Home mainHeading="Find what you Crave" />
      <div className='bkb'><h3 className='mainpagetext'>Welcome to Nucleo: Your Ultimate Hub for Entertainment Reviews and More! Discover the latest insights, opinions, and recommendations across video games, movies, TV shows, and board games.</h3>
      <div className='main-button marginbutton'>
        <div>
          <p className='mainwhite'>Read reviews create by our passionate community</p>
          <Link to="/reviews"><button>View Reviews</button></Link>
        </div>
        <div>
          <p className='mainwhite'>Write your own review and let your voice be heard</p>
          <Link to="/writereview"><button>Write a Review</button></Link>
        </div>
      </div>
      </div>
      <StoryBar stories={storiesTop} heading="2023 Top Rated So Far" />
      <StoryBar stories={storiesBottom} />
    </div>
  );
};

export default Mainpage;
