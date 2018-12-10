import React from 'react';
import './property.css'
import PropertyList from './PropertyList';

const PropertyBox = ({data}) => {
  if(!data) return null;
  return(
    <div className="property-box">
      <h1>Homes in Location</h1>
      <PropertyList data={data}/>
    </div>
  )
}

export default PropertyBox;
