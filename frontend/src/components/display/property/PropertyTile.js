import React from 'react';
import { Link } from 'react-router-dom';

const PropertyTile = ({data}) => {
  if(!data) return null;
  console.log(data);
  return(

    <div className="property-tile">
      <div className="place-holder-img">
        <img className="property-image" alt="property"src={data.images[0]}></img>
      </div>
      <div className="property-info-container">
        <h5>{data.type}</h5>
        <Link to={'/properties/' + data.id}>
          {data.name}
        </Link>
        <h4></h4>
        <div className="property-details">
          <p className="property-details">{data.guests} Guests,</p>
          <p className="property-details">{data.bedrooms} Bedrooms,</p>
          <p className="property-details">{data.beds} Beds</p>
        </div>
        <div>
          <h4 className="property-price">{data.price}</h4>
          <button className="view-property-btn" value="submit">View</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyTile;
