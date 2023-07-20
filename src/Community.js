import Home from './Home';
import CommunityHubComponent from './CommunityHubComponent';
import CommunityBar from './components/CommunityBar';

const Community = () => {

  const recentlyPublished = [
    { review: [
        "My list is Inception,",
        "The Dark Knight,",
        "Pulp Fiction,",
        "The Shawshank Redemption,",
        "The Godfather.",
      ].join("\n"), title: 'Movie List', name:"Casey Nate", date: "2023", id: 1 },
    { review: [
        "My list is The Legend of Zelda: Breath of the Wild,",
        "Red Dead Redemption 2,",
        "The Last of Us Part II,",
        "Minecraft,",
        "and Super Mario Odyssey.",
      ].join("\n"), title: 'Video Game List', name:"Will Smith", date: "2021", id: 2 },
    { review: [
        "My list is Breaking Bad,",
        "The Walking Dead,",
        "Friends,",
        "The Big Bang Theory,",
        "Stranger Things.",
      ].join("\n"), title: 'TV-Show List', name:"Marie Lopp", date: "2021", id: 3 },
    { review: [
        "My list is Settlers of Catan,",
        "Ticket to Ride,",
        "Carcassonne,",
        "Pandemic,",
        "Codenames.",
      ].join("\n"), title: 'Board Games List', name:"Ashley Poule", date: "2020", id: 4 },
  ];

  return (
    <div className='content'>
      <Home mainHeading="Community Hub"/>
      <div className='reviewpagetext'><p>Do you have a list that you're willing to share? Speak your mind!</p></div>
      <CommunityHubComponent />
      <CommunityBar stories={recentlyPublished} heading="View Lists"/>
      
    </div>
  );
}
 
export default Community;