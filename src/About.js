
import Home from './Home';
import AboutComp from './components/AboutComp.js';

const About = () => {

  return (
    <div className='content'>
      <Home mainHeading="About"/>
      <p className='reviewpagetext'>Need to get a hold of us? Reach us here: nucleoreviews@gmail.com</p>
      <AboutComp />
    </div>
  );
}
 
export default About;