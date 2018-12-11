import React from 'react';

class PropertyBookingForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stuff: null
    }
  }

  render() {
    return(
      <div className="details-right">
        <h4>Check in</h4>
        <h4>Check out</h4>
        <h4>Guests</h4>
        <button>Book</button>
      </div>
    )
  }
}

export default PropertyBookingForm;
