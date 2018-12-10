import React from 'react';
import InfoBox from '../components/display/InfoBox';
import Request from '../helpers/Request.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    let request = new Request()
request.get('/api/properties').then(data => {
  this.setState({data: data}
 )
  })
}

  render() {
    if(!this.state.data) return null;
    console.log(this.state.data);
    return(
      <div className="main">
        <img className="location-image" src="https://firebasestorage.googleapis.com/v0/b/wherebnb-53946.appspot.com/o/NYC%2FBACKGROUND%2Fpexels-photo-408951.jpeg?alt=media&token=3dc99bef-d94b-436f-838f-086bf73132d0"></img>
        <InfoBox data={this.state.data}/>
      </div>
    )

  }
}

export default Main;
