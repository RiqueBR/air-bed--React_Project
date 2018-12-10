import React from 'react';

const PropertyDetails = ({data}) => {
  if(!data) return null;
  console.log(data);
  return(
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

      <div className="details-body">
        <h1>{data.name}</h1>
      </div>
    </div>
  )
}

export default PropertyDetails;
