import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Request from '../../../helpers/Request';
import './Search.css';

class SearchFormBox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedLocation: "New York City"
    }
    // this.filterData = this.filterData.bind(this);
    // this.findLocations = this.findLocations.bind(this);
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/properties').then(data => {
      this.setState({
        data: data
      })
    })
  }

  // findLocations(){
  //   if(!this.state.data._embedded.properties) return null;
  //
  //   const locations = this.state.data._embedded.properties.map((location) => {
  //     return location.location
  //   })
  //
  //   return locations
  // }

  // filterData(){
  //   const newLocations = this.findLocations();
  //
  //   const filteredData = newLocations.filter((location, pos, self) => {
  //     return self.indexOf(location) === pos;
  //   })
  //   // console.log(filteredData);
  //   return filteredData
  // }

  render(){
    if(!this.props) return null;
    console.log(this.props);

    return (
      <div className="search">
        <div className="search-header-container">
          <SearchForm handleSubmit={this.props.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default SearchFormBox;
