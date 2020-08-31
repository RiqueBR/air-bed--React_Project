
import React, { useEffect, useState } from 'react';
import { connect, useStore } from 'react-redux';
import UIButton from '../UIButton';

import { fetchProperties } from '../../actions/propertiesActions'

import './Search.css'

const SearchFormBox = ({ dispatch, loading, properties, hasErrors }) => {
  // TODO: Call properties list (below) from somewhere else
  // useEffect(() => {
  //   dispatch(fetchProperties())
  // }, [dispatch])

  const [locationSelected, setLocationSelected] = useState('');

  function handleInputChange(event) {
    setLocationSelected(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(locationSelected);

    if (locationSelected !== undefined || locationSelected !== '')
      useEffect(() => {
        dispatch(fetchProperties(locationSelected))
      }, [dispatch])
  }


  // Here's how to access state
  const store = useStore()

  const renderLocationOptions = store.getState().locations.locations.map(location => {
    return <option
      key={location.id}
      value={location.id}
      name={location.city}>
      {location.city} - {location.country}
    </option>
  });

  return (
    // TODO: Needs date input fields
    <form onSubmit={handleSubmit}>
      <div>
        <label>Location</label>
        <select
          name="location"
          value={locationSelected}
          onChange={handleInputChange}>
          {renderLocationOptions}
          <option value=''>-- Please select a city --</option>
        </select>

      </div>
      <UIButton type="submit" title="search" path="/properties" />
    </form>

    // TODO: Remember to compare class names to stylesheet
    // <div className="search">
    //   <div className="search-header-container">
    //   </div>
    // </div>
  )
}

// Map Redux state to React component props
const mapStateToProps = state => ({
  loading: state.properties.loading,
  properties: state.properties,
  hasErrors: state.properties.hasErrors,
})
// Connect Redux to React
export default connect(mapStateToProps)(SearchFormBox)


