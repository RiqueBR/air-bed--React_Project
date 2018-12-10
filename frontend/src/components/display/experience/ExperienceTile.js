import React from 'react';

const ExperienceTile = ({url, title, description, price}) => {
  return(
    <div className="experience-tile">
      <div className="place-holder-img">
        <img src = {url} alt="experience-img"></img>
      </div>
      <div className="experience-info-container">
        <h4 className="item-title">{title}</h4>
        <h5 className="item-desc">{description}</h5>
        <div>
          <h4 className="experience-price">{price}</h4>
          <button className="view-experience-btn" value="submit">View</button>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTile;


// 1. Name: Maracanã Tour Experience (Title)
// 2. Location: Maracanã
// 3. Category: Sporting event
// 4. Description: I will show you Maracanã stadium from a perspective no fans have ever imagined.
// 5. Price: £52
// 6. Duration: 6 h