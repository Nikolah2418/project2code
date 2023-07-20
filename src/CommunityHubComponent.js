import TextBox from './components/TextBox';
import React, { useState } from 'react';
import DropdownBox from './components/DropdownBox';

const CommunityHubComponent = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const textChange = (event) => {
    setText(event.target.value);
  };
  const textChange2 = (event) => {
    setText2(event.target.value);
  };
  const textChange3 = (event) => {
    setText3(event.target.value);
  };
  

  const genre = [
    { label: 'Video Game', value: 'videogame' },
    { label: 'Movie', value: 'movie' },
    { label: 'TV-Show', value: 'tvshow' },
    { label: 'Board Game', value: 'boardgame' },
  ];

  return (
    <div className='grid content'>
      <div className='top-review-boxes'>
        <div>
            <TextBox value={text2} onChange={textChange2} type={"Name"} className="small-text-box" />
        </div>
        <div>
            <DropdownBox dropdownoptions={genre} type={"EntertainmentType"} />
        </div>
      </div>
      <div>
        <TextBox value={text3} onChange={textChange3} type={"Enter Your List Here"} className="text-box" />
        <div className='submit'><button>Submit</button></div>
      </div>
    </div>
  );
  
}

export default CommunityHubComponent;