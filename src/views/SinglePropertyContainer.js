import React from 'react';
import { connect, useStore } from 'react-redux';
import { useParams } from "react-router-dom";

import PropertyDetails from '../components/property/PropertyDetails';

const SinglePropertyContainer = ({property}) => {

  const params = useParams()

  useStore()
  
  
  console.log(property);
  

    return (
      <div>
        <PropertyDetails data={property} />
      </div>
    )
  
}


const mapStateToProps = state => ({
  property: state.properties.properties.results[0]
  // TODO: add errors here
})

export default connect(mapStateToProps)(SinglePropertyContainer);
