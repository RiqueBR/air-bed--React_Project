import React, {Component} from 'react';
import Moment from 'moment';
import {extendMoment} from 'moment-range';

const SearchForm = (props) => {

  if(!props) return null;

  const moment = extendMoment(Moment);

  // debugger;
  function handleSubmit(event){
    event.preventDefault();
    const booking = {

      "location": event.target.location.value,
      "checkIn": event.target.checkIn.value,
      "checkOut": event.target.checkOut.value,
      "dateRange": null
    }

    const start = booking.checkIn
    const end = booking.checkOut

    const range = moment.range(start, end)

    checkOverlap(range)

    booking.dateRange = range;
    console.log(booking.dateRange);
    // console.log(booking.location)

    props.handleLocationChange(booking)
    props.handleSelectedDateRange(booking)
  }

  function checkOverlap(inputRange){

    // grab existing user bookings with start and end dates to form moment.range objects

    const filteredBookings = props.fullData._embedded.properties

    const rangeListsPerProp = filteredBookings.map(prop =>{

      if(!prop) return null;

      return prop.users.map(user => {
        console.log(user.endDate.slice(0,10), user.endDate.slice(0,10));
        const sd = moment(user.startDate.slice(0,10), 'YYYY-MM-DD');
        const ed = moment(user.endDate.slice(0,10), 'YYYY-MM-DD');
        const rangeObject = moment.range(sd, ed)

        return rangeObject;
      })
    })

    console.log(filteredBookings)
    console.log(rangeListsPerProp)

    // compare each booking range within the rangeList with inputRange

    console.log(inputRange)


    const noOverlapList = rangeListsPerProp.map((perRange, index) => {
      if (perRange.length === 0) {
        return filteredBookings[index];
      }else{
        for(let range of perRange) {
          if (range.overlaps(inputRange)){
              // return null if there is an overlap
            console.log(range.overlaps(inputRange))
            return null;
          }
          // else return the property to the list noOverlapList
          return filteredBookings[index]
        }
      }
    })

    console.log(noOverlapList)

    const displayList = noOverlapList.filter(prop => prop !== null)
    console.log(displayList)
  }

  const locations = props.filteredData.map((location, index) =>{
    return <option key={index} value={location}>{location}</option>
  })

  return(

    <div>
      <form onSubmit={handleSubmit}>
        <select name="location">
          {locations}
        </select>
        <input type="date" placeholder="Check-in" name="checkIn"/>
        <input type="date" placeholder="Check-out" name="checkOut" />
        <button type="submit">Search</button>
      </form>
    </div>
  )

}

export default SearchForm;
