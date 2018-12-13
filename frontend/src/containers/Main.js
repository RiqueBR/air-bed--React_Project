import React from 'react';
import InfoBox from '../components/display/InfoBox';
import Request from '../helpers/Request.js';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      experiences: null
    }
  }

  componentDidMount() {

    console.log(this.props);
    // this.setState({
    //     data: this.props.data
    //   }
    // )

    // let request = new Request()
    // request.get('/api/properties').then(data => {
    //   this.setState({data: data}
    //   )
    // })

    // let request2 = new Request()
    // request2.get('/api/experiences').then(data => {
    //   this.setState({experiences: data}
    //   )
    // })
  }

  componentDidUpdate(){
    console.log(this.state);

  }

  render() {
    if(!this.props) return null;
    console.log(this.props);
    if(!this.state.data){
      return(
        <div className = "centered">
          <div className = "blob-1"></div>
          <div className = "blob-2"></div>
        </div>
      )
    }
    console.log(this.state.data);
    return(
      <div className="main">
        <img className="location-image" src="https://firebasestorage.googleapis.com/v0/b/wherebnb-53946.appspot.com/o/NYC%2FBACKGROUND%2Fpexels-photo-408951.jpeg?alt=media&token=3dc99bef-d94b-436f-838f-086bf73132d0"></img>
        <div>
          <h1 className="main-location-title">{this.state.data._embedded.properties[0].location}</h1>
        </div>

      </div>
)
      }


    }

    export default Main;
