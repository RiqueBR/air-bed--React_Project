
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchForm from './searchForm'
import { fetchProperties } from '../../actions/propertiesActions'

import './Search.css'

const SearchFormBox = ({ dispatch, loading, properties, hasErrors }) => {

  useEffect(() => {
    dispatch(fetchProperties())
  }, [dispatch])

  // This needs patched on the backend, location must return a city
  // function findLocations() {
  //   // const locations = this.properties.map((location) => {
  //   //   return location.location
  //   // })
  //   return locations
  // }

  const locations = ['Edinburgh', 'Glasgow']


  // filterLocationData() {
  //   const newLocations = this.findLocations();

  //   const filteredData = newLocations.filter((location, pos, self) => {
  //     return self.indexOf(location) === pos;
  //   })

  //   return filteredData
  // }

  // handleLocationChange(booking) {
  //   if (!booking) return null;
  //   this.setState({ selectedLocation: booking.location })
  // }

  // handleSelectedDateRange(booking) {
  //   if (!booking) return null;
  //   this.setState({ selectedDateRange: booking.dateRange })
  // }


    return (
      <div className="search">
        <div className="search-header-container">
          <SearchForm
            //handleSelectedDateRange={this.handleSelectedDateRange}
            // handleLocationChange={this.handleLocationChange}
            //filteredLocationOptions={this.filterLocationData()}
            //fullData={this.state.data._embedded.properties}
            // passToApp={this.props.passToApp}
            locations={locations}
          />
        </div>
      </div>
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
