import React from 'react';
import PropertyTile from './PropertyTile';

const PropertyTileBox = ({data}) => {

if(!data) return null;
  console.log(data);

  const properties = data.map((property, index) => {
    return(
      <PropertyTile key={index} data={property} />
    )
  })

  return(
    <div className="property-list">
      {properties}
    </div>
  )
}

export default PropertyTileBox;
