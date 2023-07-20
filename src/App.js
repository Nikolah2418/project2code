import Sidebar from './components/Sidebar';
import Mainpage from './Mainpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WriteReview from './WriteReview';
import Reviews from './Reviews';
import Upcoming from './Upcoming';
import About from './About';
import Community from './Community';
import Newsletter from './Newsletter';


function App() {

  return (
    <Router>
    <div className="App">
      <Sidebar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/writereview">
            <WriteReview />
          </Route>
          <Route exact path="/reviews">
            <Reviews/>
          </Route>
          <Route exact path="/upcoming">
            <Upcoming/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/community">
            <Community/>
          </Route>
          <Route exact path="/newsletter">
            <Newsletter/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
