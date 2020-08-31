import React from 'react';
import { connect, useStore } from 'react-redux';
import PropertyTile from './PropertyTile';

const PropertyBox = ({ data }) => {
  const store = useStore();
  console.log(store.getState());

  if (!data) return null;

  const properties = data.map((property, index) => {
    return (
      <PropertyTile key={index} data={property} />
    )
  })

  return (
    <div className="property-list">
      {properties}
    </div>
  )
}

// const mapStateToProps = state => ({ 
//   index, properties
// })
// export default connect(PropertyBox);
export default PropertyBox;

