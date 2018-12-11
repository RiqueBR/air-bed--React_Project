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

  const locations = props.filteredData.map((location, index) =>{
    return <option key={index} value={location}>{location}</option>
  })

  function checkOverlap(inputRange){
    console.log(props.fullData._embedded.properties)
    // grab existing bookings list with ranges

    const filteredBookings = props.fullData._embedded.properties

    const rangeList = filteredBookings.map(prop =>{

      if(!prop) return null;

      return prop.users.map(user => {
        console.log(user.endDate.slice(0,10), user.endDate.slice(0,10));
        const sd = moment(user.startDate.slice(0,10), 'YYYY-MM-DD');
        const ed = moment(user.endDate.slice(0,10), 'YYYY-MM-DD');
        const rangeObject = moment.range(sd, ed)

        return rangeObject;
      })
      // moment.range(prop.users.startDate, prop.users.endDate)
    })



    console.log(filteredBookings)
    console.log(rangeList)
    console.log(props)


    // const startDate = filteredBookings[0].users[0].startDate
    // const endDate = filteredBookings[0].users[0].endDate
    //
    // const propRange = moment.range(startDate, endDate)
    //
    // const result = inputRange.overlaps(propRange)



  // const newRangeList = rangeList.forEach((range) => {
  //     inputRange.overlaps(range)
  //
  //   })


  }




    // compare each booking range within the booking list with inputRange

    // return true if there is an overlap

    // else return false and send the range through to DisplayPage as a props


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
