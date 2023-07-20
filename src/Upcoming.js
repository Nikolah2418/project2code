
import Home from './Home';
import UpcomingBar from './components/UpcomingBar';

const Upcoming = () => {

    const mainReviews = [
        { review: ["Oxenfree 2: Lost Signals", "The Expanse: A Telltale Series", "Path of Exile 2", "Atlas Fallen", "Immortals of Aveum", "Armored Core 6: Fires of Rubicon"], title: 'Top Upcoming Video Games:', id: 1 },
        { review: ["Indiana Jones and the Dial of Destiny", "Elemental", "Mission: Impossible Dead Reckoning Part One", "Oppenheimer", "Haunted Mansion", "Heart of Stone"], title: 'Top Upcoming Movies:', id: 2 },
        { review: ["Stranger Things", "The Crown", "Game of Thrones: House of the Dragon", "Succession", "The Witcher", "The Mandalorian"], title: 'Top Upcoming TV-Shows:', id: 3 },
        { review: ["Dune: Imperium", "Lost Ruins of Arnak", "Frosthaven", "Ankh: Gods of Egypt", "Paleo", "Marvel United: X-Men"], title: 'Top Upcoming Board Games:', id: 4 },
      ];

  return (
    <div className='content'>
      <Home mainHeading="Top Upcoming"/>
      <div className='reviewpagetext'><p>Want to know what to look forward to? We've got you covered!</p></div>
      <UpcomingBar stories={mainReviews} heading="Pieces of entertainment to look forward to:"/>
    </div>
  );
}
 
export default Upcoming;