import React from 'react';

const ExperienceTile = (props) => {
  return(
    <div className="experience-tile">
      {/* <img src="" alt="experience"></img> */}
      <div className="place-holder-img"></div>
      <div className="experience-info-container">
        <h4 className="item-title">Title</h4>
        <h5 className="item-desc">Description</h5>
        <div>
          <h4 className="experience-price">Price</h4>
          <button className="view-experience-btn" value="submit">View</button>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTile;
