import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const SearchForm = (props) => {

  if(!props) return null;
  console.log(props);



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



  // const locations = data.map((location, index) =>{
  //   return <option key={index} value={location}>{location}</option>
  // })

  return(
    <div className="search-form-container">
      <h2 className="search-header">Find homes all over the world on whereBnB</h2>
      <p className="search-sub-header">Discover entire homes and private rooms perfect for any trip.</p>
      <form onSubmit={props.handleSubmit}>
        <select className="select-box" >

        </select>
        <div className="search-date-pickers-container">
          <input className="check-in-picker" type="date" placeholder="Check-in" name="checkIn" />
          <img className="date-arrow" src="/images/DateArrow.png" alt="Logo"/>
          <input className="check-out-picker" type="date" placeholder="Check-out" name="checkOut" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  )

}

export default SearchForm;
