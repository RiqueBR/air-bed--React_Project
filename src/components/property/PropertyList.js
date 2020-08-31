import React from 'react';
import { connect, useStore } from 'react-redux';
import PropertyTile from './PropertyTile';

const PropertyList = ({ properties }) => {
  const store = useStore();
  // console.log(properties);

  const listResultProperties = properties.map((property) => {
    return (
        <PropertyTile key={ property.id } { ...property } />
    )
    
  })

  return (
      <div className="property-list">
          {listResultProperties}
      </div>
  )
}

const mapStateToProps = state => ({ 
  properties: state.properties.properties.results
  // TODO: add errors here
})

export default connect(mapStateToProps)(PropertyList);
