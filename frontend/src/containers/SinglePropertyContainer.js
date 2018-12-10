import React from 'react';
import Request from '../helpers/Request.js';

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

    return(
      <div>
        <h1>{this.state.property.name}</h1>
      </div>
    )
  }
}

export default SinglePropertyContainer;
