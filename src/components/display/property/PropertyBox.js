import React from 'react';
import './property.css'
import PropertyList from './PropertyList';

const PropertyBox = (props) => {
  return(
    <div className="property-box">
      <h1>Property Box</h1>
      <PropertyList />
    </div>
  )
}

export default PropertyBox;
