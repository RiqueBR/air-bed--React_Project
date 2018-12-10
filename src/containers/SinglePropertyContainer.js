import React from 'react';

class SinglePropertyContainer extends React.Component {
  constructor(){
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
    return(
      <div>
        <h1>Single Property Container</h1>
      </div>
    )
  }
}

export default SinglePropertyContainer;
