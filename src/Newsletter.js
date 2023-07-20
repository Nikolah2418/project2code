import React, { useState } from 'react';
import TextBox from './components/TextBox';
import DropdownBox from './components/DropdownBox';
import Home from './Home';

const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content White">
        <h2>You have successfully subscribed!</h2>
        <div className='center-button'><button onClick={closePopup}>Close</button></div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const textChange = (event) => {
    setText(event.target.value);
  };

  const textChange2 = (event) => {
    setText2(event.target.value);
  };

  const genre = [
    { label: 'Video Game', value: 'videogame' },
    { label: 'Movie', value: 'movie' },
    { label: 'TV-Show', value: 'tvshow' },
    { label: 'Board Game', value: 'boardgame' },
  ];

  const frequency = [
    { label: 'Once a week', value: 'ten' },
    { label: 'Once a Month', value: 'nine' },
    { label: 'Once every 3 Months', value: 'eight' },
    { label: 'Once every 6 Months', value: 'sever' },
  ];

  const handleSubscribe = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className='content'>
      <Home mainHeading="Newsletter"/>
      <div className='reviewpagetext'><p>Want to stay up-to-date? Subscribe!</p></div>
      <div className='grid-container'>
        <div>
          <div className='grid-item'>
            <div className='red-circle'>
              <span className='circle-number'>1</span>
            </div>
          </div>
          <div className='circle-text'>
            <p>Step 1: Enter Your Personal Information</p>
          </div>
          <div className='grid-item'>
            <div className='yellow-circle'>
              <span className='circle-number'>2</span>
            </div>
          </div>
          <div className='circle-text'>
            <p>Step 2: Select the Entertainment Type and Frequency you wish to receive Information about.</p>
          </div>
          <div className='grid-item'>
            <div className='green-circle'>
              <span className='circle-number'>3</span>
            </div>
          </div>
          <div className='circle-text'>
            <p>Step 3: Click Subscribe!</p>
          </div>
        </div>
        <div>
          <div className='textboxes-red'>
            <div className='grid-item'>
              <TextBox value={text} onChange={textChange} type={"Your Name"} className="small-text-box" />
            </div>
            <div className='grid-item'>
              <TextBox value={text2} onChange={textChange2} type={"Your Email"} className="small-text-box" />
            </div>
          </div>
          <div className='textboxes-yellow'>
            <div className='grid-item'>
              <DropdownBox dropdownoptions={genre} type={"Entertainment Type"} />
            </div>
            <div className='grid-item'>
              <DropdownBox dropdownoptions={frequency} type={"Newsletter Frequency"} />
            </div>
          </div>
          <div>
            <div className='submit textboxes-green'>
            <button onClick={handleSubscribe}>Subscribe</button></div>
          </div>
        </div>
      </div>
      {showPopup && <Popup closePopup={closePopup} />}
    </div>
  );
};
export default Newsletter;
