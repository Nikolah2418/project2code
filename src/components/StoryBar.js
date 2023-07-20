import React from 'react';

const StoryBar = (props) => {
      const stories = props.stories;
      const heading = props.heading;

  return (
    <div className="top-stories">
      <h2>{heading}</h2>
      <div className="image-boxes">
        {stories.map((story) => (
          <div className="image-box" key={story.id}>
            <img src={story.imageSrc} alt={story.title} />
            <h3>{story.title}</h3>
            <h4>{story.type}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBar;


