import React, {Component} from 'react';

const SearchForm = ({data}) => {

  if(!data) return null;

  // debugger;
  function handleSubmit(event){
    event.preventDefault();
    const booking = {
      "location": event.target.location.value,
      "checkIn": event.target.checkIn.value,
      "checkOut": event.target.checkOut.value
    }
    // this.setState({location: ''})
    //send this somewhere
    // TODO: <Main />
  }



  const locations = data.map((location, index) =>{
    return <option key={index} value={location}>{location}</option>
  })

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <select>
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
