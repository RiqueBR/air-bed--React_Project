import React from 'react';
import PropertyTile from './PropertyTile';

const PropertyTileBox = (props) => {

  return(
    <div className="property-list">
      <PropertyTile
        type="Entire Flat"
        title="Manhattan Midtown West Cozy&Modern"
        guests={3}
        bedrooms={1}
        beds={2}
        url={"https://firebasestorage.googleapis.com/v0/b/wherebnb-53946.appspot.com/o/NYC%2F1%2Fnyc1.jpg?alt=media&token=c737d9ea-3aab-4d0b-b5f5-506de1cba423"}
        price={112}


      />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
      <PropertyTile />
    </div>
  )
}

export default PropertyTileBox;
