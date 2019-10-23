import React from 'react';
import PropertyDetails from '../components/display/property/PropertyDetails';

class SinglePropertyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      property: null
    }
  }



  render() {
    if (!this.state.property) return null;

    return (
      <div>
        <PropertyDetails data={this.state.property} />
      </div>
    )
  }
}

export default SinglePropertyContainer;
