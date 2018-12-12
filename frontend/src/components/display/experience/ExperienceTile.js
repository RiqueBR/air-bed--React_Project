import React from 'react';

const ExperienceTile = ({data}) => {
  if(!data) return null;
  console.log(data);
  return(
    <div className="property-tile">
      <div className="place-holder-img">
        <img className="property-image" src = {data.image} alt="experience-img"></img>
      </div>

      <div className="property-info-container">
        <div className="center-details">
        <h5 className="tile-view-type">{data.category}</h5>
        <h4 className="experience-title">{data.title}</h4>
        <h5 className="item-desc">{data.description}</h5>
        <div>
          <h4 className="from">from</h4>
          <h4 className="property-price">£{data.price}</h4>
        </div>
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
