import React from 'react';

class PropertyBookingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuff: null
    }
  }

  render() {
    if (!this.props) return null;

    return (
      <div className="property-booking-form">
        <div className="booking-price-header">
          <h3 className="price-text">
            £{this.props.data.price}
          </h3>
          <h4 className="inline-text">
            per night
          </h4>
          <div className="rating-container">
            <img className="star-icon" src="/images/Star.png" alt="Logo" />
            <h4 className="rating-text">{this.props.data.rating}</h4>
          </div>
        </div>
        <form className="date-form">

          <h4 className="dates-text" >Dates</h4>

          <div className="date-pickers-container">
            <input className="check-in-picker" type="date" placeholder="Check-in" name="checkIn" />
            <img className="date-arrow" src="/images/DateArrow.png" alt="Logo" />
            <input className="check-out-picker" type="date" placeholder="Check-out" name="checkOut" />
          </div>
          <h4 className="your-details-label">Your email</h4>
          <input className="booking-text-input" type="text" placeholder="myemail@customer.com"></input>
          <h4 className="your-details-label">Card details</h4>
          <input className="booking-text-input" type="text" placeholder="1234-4567-8910-1112"></input>
          <button className="booking-submit" type="submit">Book</button>
        </form>
      </div>
    )
  }
}

export default PropertyBookingForm;
