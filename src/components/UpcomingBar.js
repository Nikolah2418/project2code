import React from 'react';

const UpcomingBar = (props) => {
  const stories = props.stories;
  const heading = props.heading;

  return (
    <div className="top-stories">
      <h2>{heading}</h2>
      <div className="review-boxes">
        {stories.map((story) => (
          <div className="review-box white" key={story.id}>
            <h3>{story.title}</h3>
            <div className="upcoming-items">
              {story.review.map((item, index) => (
                <div key={index} className="upcoming-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBar;
