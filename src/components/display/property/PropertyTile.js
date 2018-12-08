import React from 'react';

const PropertyTile = (props) => {
  return(

    <div className="property-tile">
      <div className="place-holder-img"></div>
      <div className="property-info-container">
        <h5>Property Type</h5>

        <h4>Property Name</h4>
        <h4>Property Rating</h4>
        <p>property details</p>
        <div>
          <h4 className="property-price">Price</h4>
          <button className="view-property-btn" value="submit">View</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyTile;
