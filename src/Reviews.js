
import Home from './Home';
import ReviewBar from './components/ReviewBar';
import FacetedSearch from './components/Faceted';
import React, { useState } from 'react';

const Reviews = () => {
  const mainReviews = [
    { review: "A captivating action game that delivers an immersive experience. The stunning visuals and challenging gameplay kept me engaged for over 100 hours. It's a must-play for fans of the genre. ", date: '2023', name: 'Paul Dixon', contentType: 'Video Games', title: 'Elden Ring', genre: 'Role-Playing', rating: '8/10', year: '2021', length: 'Over 100 Hours', id: 1},
    { date:"2022", name:"Phil Swift", review: "An adventurous journey that had me hooked from start to finish. The captivating storyline and intriguing characters kept me on the edge of my seat. With 50+ hours of gameplay, it offers a fulfilling experience. Highly recommended.", title: 'Fallout 4', genre: 'Adventure', rating: '9/10', year: '2020', length: '50-100 Hours',contentType: 'Video Games', id: 2 },
    { date:"2022", name: "Noah Williams", review: "A thrilling horror game that sends shivers down your spine. The atmospheric setting and suspenseful gameplay create a chilling experience. Although it's relatively short (10 hours), it's a captivating ride that leaves a lasting impression.", title: 'Arcane', genre: 'Horror', rating: '7/10', year: '2023', length: 'Less than 10 Hours', contentType: 'TV-Shows',id: 3 },
    { date:"2023", name: "Olivia Johnson",review: "A horror masterpiece that delivers an emotional rollercoaster. The gripping narrative, well-developed characters, and intense decisions make it a standout TV-Show. With over 100 hours of Episodes, it offers an unforgettable experience. ", title: 'The Walking Dead', genre: 'Horror', rating: '8/10', year: '2021', length: 'Over 100 Hours',contentType: 'TV-Shows', id: 4},
    { date:"2022", name: "Liam Smith",review: "An immersive adventure that pushes your survival skills to the limit. The open-world environment and player interactions create a dynamic and intense gameplay experience. With 100+ hours of content, it's a game that offers endless possibilities. ", title: 'Rust', genre: 'Adventure', rating: '9/10', year: '2022',contentType: 'Video Games', length: 'Over 100 Hours', id: 5 },
    { date:"2020", name: "Emma Brown",review: "A game filled with dark humor and unexpected twists. The hilarious card-based gameplay and outrageous scenarios keep you entertained. It's a great choice for those who enjoy a mix of dark-humour and comedy.", title: 'Joking Hazard', genre: 'Horror', rating: '7/10', year: '2023', length: 'Less than 10 Hours',contentType: 'Board Games', id: 6 },
    { date:"2023", name: "Mason Jones",review: "John Wick is an action-packed thrill ride from start to finish. Keanu Reeves delivers an unforgettable performance as the unstoppable assassin seeking revenge. With stylish cinematography and intense fight sequences, this film is a must-watch for action movie fans.", title: 'John Wick', genre: 'Action', rating: '7/10', year: '2023', length: 'Less than 10 Hours',contentType: 'Movies', id: 7 },
    { date:"2022", name: "Ava Davis",review: "Interstellar is a breathtaking sci-fi masterpiece that combines mind-bending concepts with emotional depth. Christopher Nolan's visionary direction, stunning visuals, and Hans Zimmer's powerful score create an immersive experience that lingers long after the credits roll.", title: 'Interstellar', genre: 'Adventure', rating: '8/10', year: '2021', length: 'Over 100 Hours',contentType: 'Movies', id: 8},
    { date:"2021", name: "Ethan Wilson",review: "Rust is an immersive and unforgiving survival game that pushes players to their limits. With its realistic world, intense PvP encounters, and complex crafting system, Rust offers a challenging and exhilarating experience that keeps players coming back for more.", title: 'Rust', genre: 'Adventure', rating: '9/10', year: '2022', contentType: 'Video Games',length: '50-100 Hours', id: 9 },
    { date:"2022", name: "Sophia Taylor",review: "Joking Hazard is a hilariously entertaining party game that delivers non-stop laughter. With its clever comic strip-style cards, it sparks creativity and creates memorable and unpredictable moments, making it a must-have for any game night.", title: 'Joking Hazard', genre: 'Comedy', rating: '7/10', year: 'Previous to 2020', length: 'Over 100 Hours',contentType: 'Board Games', id: 10 },
    { date:"2022", name: "Lucas Miller",review: "Atomic Heart is an immersive and visually stunning first-person action game. With its unique blend of horror, Soviet aesthetics, and intense combat, it delivers a thrilling and atmospheric experience that keeps you on the edge of your seat.", title: 'Atomic Heart', genre: 'Action', rating: '8/10', year: '2023', length: '10-25 Hours',contentType: 'Video Games', id: 11 },
    { date:"2019", name: "Isabella Anderson",review: "Cards Against Humanity is a hilariously irreverent party game that guarantees laughs. With its dark humor and clever wordplay, it keeps players entertained and on the edge of their seats. A must-have for any gathering.", title: 'Cards Against Humanity', genre: 'Strategy', rating: '6/10', year: '2023', length: '25-50 Hours',contentType: 'Board Games', id: 12 },
    { date:"2021", name: "Oliver Martinez",review: "Dark Souls is a punishingly challenging and atmospheric action RPG that immerses players in a bleak and unforgiving world. Its intricate level design, intense boss battles, and deep lore make it a must-play for fans of challenging games.", title: 'Dark Souls', genre: 'Action', rating: '10/10', year: 'Previous to 2020', contentType: 'Video Games',length: '10-25 Hours', id: 13 },
    { date:"2022", name: "Mia Thompson",review: "The Walking Dead is a thrilling and gripping TV series that keeps viewers on the edge of their seats. With its intense storytelling, compelling characters, and post-apocalyptic setting, it delivers an unforgettable zombie survival experience.", title: 'The Walking Dead', genre: 'Horror', rating: '8/10', year: '2021', length: 'Over 100 Hours',contentType: 'TV-Shows', id: 14},
    { date:"2023", name: "Aiden Clark",review: "Dark Souls 3 is a masterful action RPG that immerses players in a beautifully grim and challenging world. With its intense combat, intricate level design, and haunting atmosphere, it delivers an unforgettable experience for hardcore gamers seeking a true test of skill.", title: 'Dark Souls 3', genre: 'Adventure', contentType: 'Video Games',rating: '9/10', year: '2022', length: '25-50 Hours', id: 15 },
    { date:"2023", name: "Charlotte Garcia",review: "Exploding Kittens is a hilariously chaotic card game that keeps you on your toes. With unpredictable gameplay and adorable artwork, it's a purr-fect choice for a fun and fast-paced game night.", title: 'Exploding Kittens', genre: 'Comedy', rating: '5/10', year: '2023', length: 'Less than 10 Hours',contentType: 'Board Games', id: 16 },
    { date:"2020", name: "Benjamin Hernandez",review: "The Super Mario Movie delivers a nostalgic and entertaining experience for fans of the iconic video game franchise. With its colorful animation, memorable characters, and humorous storytelling, it captures the essence of the beloved gaming world in a fun-filled adventure.", title: 'The Super Mario Bros', genre: 'Romance', rating: '7/10', year: '2023', length: '10-25 Hours', contentType: 'Movies',id: 17 },
  ];

  const [filteredReviews, setFilteredReviews] = useState(mainReviews);

  const filterReviews = (selectedOptions) => {
    const filtered = mainReviews.filter((review) => {
      if (selectedOptions.genres.length > 0 && !selectedOptions.genres.includes(review.genre)) {
        return false;
      }
      if (selectedOptions.contentRating.length > 0 && !selectedOptions.contentRating.includes(review.rating)) {
        return false;
      }
      if (selectedOptions.contentReleaseYear.length > 0 && !selectedOptions.contentReleaseYear.includes(review.year)) {
        return false;
      }
      if (selectedOptions.contentLength.length > 0 && !selectedOptions.contentLength.includes(review.length)) {
        return false;
      }
      if (selectedOptions.contentType.length > 0 && !selectedOptions.contentType.includes(review.contentType)) {
        return false;
      }
      return true;
    });

    setFilteredReviews(filtered);
  };

  return (
    <div className='content'>
      <Home mainHeading="Reviews"/>
      <div className='reviewpagetext'><p>You may select and deselect any options at any time. Just remember to re-click "Filter Results."</p></div>
      <FacetedSearch onFilter={filterReviews}/>
      <ReviewBar stories={filteredReviews} heading="Reviews"/>
    </div>
  );
}
 
export default Reviews;