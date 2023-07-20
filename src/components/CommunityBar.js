import React from 'react';

const CommunityBar = (props) => {
  const stories = props.stories;
  const heading = props.heading;

  return (
    <div className="top-stories">
      <h2>{heading}</h2>
      <div className="review-boxes">
        {stories.map((story) => (
          <div
            className="review-box white"
            key={story.id}
          >
            <h3>{story.title}</h3>
            <h4>
              Written by: {story.name}
              <br />
              Publication Date: {story.date}
            </h4>
            <p>{story.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityBar;


