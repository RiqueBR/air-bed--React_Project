import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapDot from './MapDot';

class PropertyMap extends React.Component {

  constructor(props){
    super(props)
  }
  render() {
    if(!this.props.center) return null;
    return(
      <div className='map'>
        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA_qgTpj88RaUfH-MiZ3ODvdxIYlXa2F0k' }}
            defaultCenter={this.props.center}
            defaultZoom={14}
            >
              <MapDot
                lat={this.props.lat}
                lng={this.props.lon}
                text={''}
              />
            </GoogleMapReact>
          </div>
      </div>
    )
  }
}

export default PropertyMap;
