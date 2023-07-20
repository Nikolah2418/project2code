import TextBox from './components/TextBox';
import React, { useState } from 'react';
import DropdownBox from './components/DropdownBox';

const TopReviewComponent = () => {
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

  const rating = [
    { label: '10', value: 'ten' },
    { label: '9', value: 'nine' },
    { label: '8', value: 'eight' },
    { label: '7', value: 'sever' },
    { label: '6', value: 'six' },
    { label: '5', value: 'five' },
  ];

  return (
    <div className='grid content'>
      <div className='top-review-boxes'>
        <div>
            <TextBox value={text} onChange={textChange} type={"Your Name"} className="small-text-box" />
        </div>
        <div>
            <TextBox value={text2} onChange={textChange2} type={"Name of Media"} className="small-text-box" />
        </div>
        <div>
            <DropdownBox dropdownoptions={genre} type={"Entertainment Type"} />
        </div>
        <div>
            <DropdownBox dropdownoptions={rating} type={"Rating"}/>
        </div>
      </div>
      <div>
        <TextBox value={text3} onChange={textChange3} className="text-box" />
        <div className='submit'><button>Submit</button></div>
      </div>
    </div>
  );
  
}

export default TopReviewComponent;
