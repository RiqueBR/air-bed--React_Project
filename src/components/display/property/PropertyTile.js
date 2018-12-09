import React from 'react';

const PropertyTile = ({type, title, url, guests, bedrooms, beds, price}) => {
  console.log(title);
  return(

    <div className="property-tile">
      <div className="place-holder-img">
        <img className="property-image" alt="property"src={url}></img>
      </div>
      <div className="property-info-container">
        <h5>{type}</h5>
        <h4>{title}</h4>
        <p>{guests}</p>
        <p>{bedrooms}</p>
        <p>{beds}</p>
        <p></p>
        <div>
          <h4 className="property-price">{price}</h4>
          <button className="view-property-btn" value="submit">View</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyTile;
