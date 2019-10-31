import React, { Component } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { Link, withRouter } from 'react-router-dom';


const SearchForm = (props) => {

  //if (!props) return null;

  //const moment = extendMoment(Moment);

  function handleSubmit(event) {
    event.preventDefault();
    const booking = {
      "location": event.target.location.value,
      "checkIn": event.target.checkIn.value,
      "checkOut": event.target.checkOut.value,
      "dateRange": null
    }

    //const start = booking.checkIn
    //const end = booking.checkOut

    //const range = moment.range(start, end)

    //checkOverlap(range)

    //booking.dateRange = range;

    // props.handleLocationChange(booking)
    // props.handleSelectedDateRange(booking)
  }

  // function checkOverlap(inputRange) {

  //   // grab existing user bookings with start and end dates to form moment.range objects

  //   const filteredBookings = props.fullData

  //   const rangeListsPerProp = filteredBookings.map(prop => {

  //     if (!prop) return null;

  //     return prop.users.map(user => {
  //       const sd = moment(user.startDate.slice(0, 10), 'YYYY-MM-DD');
  //       const ed = moment(user.endDate.slice(0, 10), 'YYYY-MM-DD');
  //       const rangeObject = moment.range(sd, ed)

  //       return rangeObject;
  //     })
  //   })




  //   const noOverlapList = rangeListsPerProp.map((perRange, index) => {
  //     if (perRange.length === 0) {
  //       return filteredBookings[index];
  //     } else {
  //       for (let range of perRange) {
  //         if (range.overlaps(inputRange)) {
  //           // return null if there is an overlap

  //           return null;
  //         }
  //         // else return the property to the list noOverlapList
  //         return filteredBookings[index]
  //       }
  //     }
  //   })


  //   const displayList = noOverlapList.filter(prop => prop !== null)
  //   props.passToApp(displayList)
  //   props.history.push("/properties");
  // }


  // const locations = props.filteredLocationOptions.map((location, index) => {
  //   return <option key={index} value={location}>{location}</option>
  // })

  return (
    <div className="search-form-container">
      <h2 className="search-header">Find homes all over the world on whereBnB</h2>
      <p className="search-sub-header">Discover entire homes and private rooms perfect for any trip.</p>
      <form onSubmit={handleSubmit}>

        {/* <select className="select-box" name="location">
          {locations}
        </select> */}

        <div className="search-date-pickers-container">
          <input className="check-in-picker" type="date" placeholder="Check-in" name="checkIn" />
          {/* <img className="date-arrow" src="/images/DateArrow.png" alt="Logo" /> */}
          <input className="check-out-picker" type="date" placeholder="Check-out" name="checkOut" />
        </div>

        <button className="search-form-btn" type="submit">Search</button>
      </form>
    </div>
  )

}

export default withRouter(SearchForm);
