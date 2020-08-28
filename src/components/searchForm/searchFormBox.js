
import React, { useEffect, useState } from 'react';
import { connect, useStore } from 'react-redux';

import { fetchProperties } from '../../actions/propertiesActions'
// import useForm  from '../../utils/hooks/useForm'
import SearchForm from './searchForm'

import './Search.css'

const SearchFormBox = ({ dispatch, loading, properties, hasErrors }) => {

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  const [locationSelected, setLocationSelected] = useState('');

  function handleInputChange(event) {
    setLocationSelected(event.target.value)
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(locationSelected);
  }


  // Here's how to access state
  const store = useStore()

  const renderLocationOptions = store.getState().locations.locations.map(location => {
  return <option
    key={location.id}
    value={location.city} 
    name={location.city}>
      {location.city} - {location.country}
    </option>
  });




    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Location</label>
            <select 
              name="location"
              value={locationSelected}
              onChange={handleInputChange}>
              {renderLocationOptions}
            </select>
          {/* <input type="text" onChange={handleInputChange}></input> */}

          </div>
          <button type="submit">Search</button>
        </form>

      // <div className="search">
      //   <div className="search-header-container">
      //     <SearchForm
      //       //handleSelectedDateRange={this.handleSelectedDateRange}
      //       // handleLocationChange={this.handleLocationChange}
      //       //filteredLocationOptions={this.filterLocationData()}
      //       //fullData={this.state.data._embedded.properties}
      //       // passToApp={this.props.passToApp}
      //       locations={locations}>
          
      //     </SearchForm>
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


