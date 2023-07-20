
import Home from './Home';
import ReviewBar from './components/ReviewBar';
import TopReviewComponent from './TopReviewComponent';

const WriteReview = () => {

  const recentlyPublished = [
    { rating: "9/10", name:"Kyle Lout", date:"2023", review: "Elden Ring is a masterpiece that seamlessly blends captivating storytelling, breathtaking visuals, and challenging gameplay. From its vast open world to its intense boss battles, every aspect of the game delivers an unforgettable experience for fans of the action RPG genre.", title: 'Elden Ring', id: 1 },
    { rating: "8/10", name:"Tou Op", date:"2023", review: "Interstellar is a mind-bending masterpiece that takes audiences on an epic journey through space and time. With stunning visuals, emotional depth, and thought-provoking themes, it's a captivating exploration of human resilience and the power of love.", title: 'Interstellar', id: 2 },
    { rating: "10/10", name:"Nat Kilp", date:"2023", review: "Arcane is a visually stunning and emotionally captivating animated series. Its intricate storytelling, compelling characters, and breathtaking animation make it a must-watch for fans of League of Legends and anyone seeking a rich and immersive narrative experience.", title: 'Arcane', id: 3 },
    { rating: "9/10", name:"Jeff Jeans", date:"2023", review: "Joking Hazard is a hilariously twisted party game that sparks endless laughter. With its dark and absurd comic panels, it delivers outrageous and unpredictable moments, making it a must-have for any gathering of friends or family.", title: 'Joking Hazard', id: 4 },
  ];

  return (
    <div className='content'>
      <Home mainHeading="Write a Review"/>
      <div className='reviewpagetext'><p>Your Voice Matters! Enter the appropriate information and let your voice be heard!</p></div>
      <TopReviewComponent />
      <ReviewBar stories={recentlyPublished} heading="Recently Published"/>
      
    </div>
  );
}
 
export default WriteReview;