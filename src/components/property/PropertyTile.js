import React from 'react';
import { Link } from 'react-router-dom';

const PropertyTile = (property) => {

    console.log(property);

  return (

      <div className="property-tile">
          {/* <div className="place-holder-img">
              <img className="property-image" alt="property" src={ property.imgUrl }></img>
          </div> */}
          <div className="property-info-container">
              <div className="center-details">
                  <h5 className="tile-view-type">{property.roomType}</h5>
                  <div className="link-container">
                      <Link className="property-link" to={ '/properties/' + property.id }>
                          {property.name}
                      </Link>
                  </div>
                  <div className="rating-container-tile">
                      <img className="star-icon-tile" src="/images/Star.png" alt="Logo" />
                      <h4 className="rating-text-tile">{property.rating}</h4>
                  </div>

                  <div className="property-details-container-tile">
                      <p className="property-details">{property.maxGuests} guests ・</p>
                      <p className="property-details">{property.rooms} bedrooms ・</p>
                      <p className="property-details">{property.beds} beds</p>
                  </div>
                  <div className="its-late-and-i-cant-think-of-a-classname">
                      <h4 className="property-price">£{property.price}</h4>
                      <h4 className="ppn">per night</h4>
                      <Link className="property-link" to={ '/properties/' + property.id }>
                          <img className="next-icon" src="../../../../images/NextBtn.png" alt="Logo" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default PropertyTile;
