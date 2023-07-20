import React from 'react';

const StoryBar = (props) => {
      const stories = props.stories;
      const heading = props.heading;

  return (
    <div className="top-stories">
      <h2>{heading}</h2>
      <div className="review-boxes">
        {stories.map((story) => (
          <div className="review-box" key={story.id}>
            <h3>{story.title}</h3>
            <h4>Written by: {story.name}<br />Publication Date: {story.date}<br />{story.name}'s Rating: {story.rating}</h4>
            <div className='review-box-paragraph'><p>{story.review}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBar;


