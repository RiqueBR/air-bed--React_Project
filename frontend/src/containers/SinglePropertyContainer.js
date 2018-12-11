import React from 'react';
import Request from '../helpers/Request.js';
import PropertyDetails from '../components/display/property/PropertyDetails';

class SinglePropertyContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      property: null
    }
  }

  componentDidMount() {
    let request = new Request()
    const url = '/api/properties/' + this.props.id
    request.get(url).then(data => {
    this.setState({
    property: data
  })
})
  }

  render() {
    if(!this.state.property) return null;
    console.log(this.state.property);
    return(
      <div>
        <PropertyDetails data={this.state.property}/>
      </div>
    )
  }
}

export default SinglePropertyContainer;
