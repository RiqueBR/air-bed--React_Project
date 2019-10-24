import React from 'react';
import PropertyBookingForm from './PropertyBookingForm';
import PropertyHighlights from './PropertyHighlights';
import PropertyMap from './PropertyMap';

const PropertyDetails = ({ data }) => {


  if (!data) return null;
  const center = { lat: data.lat, lng: data.lon };

  return (
    <div className="property-details-body">

      <div className="property-details-img-container">

        <div className="property-details-main-img">
          <img className="property-main" src={data.images[0]}></img>
        </div>

        <div className="property-details-group-images">

          <div className="property-details-top-imgs">
            <img className="property-main-inline" src={data.images[1]}></img>
            <img className="property-main-inline" src={data.images[2]}></img>
          </div>

          <div className="property-details-bottom-imgs">
            <img className="property-main-inline" src={data.images[3]}></img>
            <img className="property-main-inline" src={data.images[4]}></img>
          </div>

        </div>

      </div>
      <div className="center">
        <div className="details-body">
          <div className="details-left">
            <h2 className="type" >{data.type}</h2>
            <h1 className="property-title">{data.name}</h1>
            <h4 className="location">{data.location}</h4>
            <div className="property-specs-container">
              <div className="detail-inline">
                <img className="guest-icon" src="../../../../images/guests.png" alt="Logo" />
                <h4 className="details-specs-text">{data.maxGuests} guests</h4>
              </div>
              <div className="detail-inline">
                <img className="guest-icon" src="../../../../images/beds.png" alt="Logo" />
                <h4 className="details-specs-text"> {data.beds} Beds</h4>
              </div>
              <div className="detail-inline">
                <img className="room-icon" src="../../../../images/rooms.png" alt="Logo" />
                <h4 className="details-specs-text"> {data.rooms} Rooms</h4>
              </div>
            </div>
            <PropertyHighlights />
            <p className="details">{data.details}</p>
          </div>
          <div className="details-right">
            <PropertyBookingForm data={data} />
            <PropertyMap lat={data.lat} lon={data.lon} center={center} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails;
