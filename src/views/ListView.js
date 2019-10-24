import React from 'react';
import PropertyTileBox from '../components/property/PropertyList';

class PropertyList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: null
    }
  }

  componentDidMount() {
    fetch('https://6ba00351.ngrok.io/api/property/')
      .then(res => res.json())
      .then(data => this.setState({ properties: data }))
  }


  render() {

    if (!this.state.properties) {
      return (
        <div className="centered">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>
      )
    }
    return (
      <div className="main">
        {/* <img className="location-image" src="https://firebasestorage.googleapis.com/v0/b/wherebnb-53946.appspot.com/o/NYC%2FBACKGROUND%2Fpexels-photo-408951.jpeg?alt=media&token=3dc99bef-d94b-436f-838f-086bf73132d0">
        </img> */}
        <div>
          <h1 className="main-location-title">List of properties</h1>
        </div>
        <PropertyTileBox data={this.state.properties} />
        {/* <ExperienceBox experiences={this.state.experiences}/> */}
      </div>
    )
  }
}

export default PropertyList;
