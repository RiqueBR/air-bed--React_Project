import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Request from '../../../helpers/Request';
import './Search.css';

class SearchFormBox extends Component{

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedLocation: null,
      selectedDateRange: null
    }
    this.filterLocationData = this.filterLocationData.bind(this);
    this.findLocations = this.findLocations.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSelectedDateRange = this.handleSelectedDateRange.bind(this);

  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/properties').then(data => {
      this.setState({
        data: data
      })
    })


  }

<<<<<<< HEAD
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
=======
  findLocations(){
    if(!this.state.data._embedded.properties) return null;

    const locations = this.state.data._embedded.properties.map((location) => {
      return location.location
    })

    return locations
  }

  filterLocationData(){
    const newLocations = this.findLocations();

    const filteredData = newLocations.filter((location, pos, self) => {
      return self.indexOf(location) === pos;
    })
    // console.log(filteredData);
    return filteredData
  }
>>>>>>> 755b8671b987cb9392282ef3d0dab633ab388446

  handleLocationChange(booking){

    console.log(booking.location)
    if(!booking) return null;
    this.setState({selectedLocation: booking.location})
  }

  handleSelectedDateRange(booking){
    if(!booking) return null;
    this.setState({selectedDateRange: booking.dateRange})
  }

  // componentDidUpdate(prevState){
  //   // if(!booking) return null;
  //   // this.setState({selectedDateRange: booking.dateRange})
  //   console.log(this.state.selectedDateRange)
  // }

  render(){
    if(!this.props) return null;
    console.log(this.props);

    return (
<<<<<<< HEAD
      <div className="search">
        <div className="search-header-container">
          <SearchForm handleSubmit={this.props.handleSubmit} />
        </div>
=======
      <div>
      <h2>title</h2>
      <p>paragraph</p>
      <SearchForm filteredData={this.filterLocationData()}
      func={this.props.func}
      fullData={this.state.data}
      handleLocationChange={this.handleLocationChange}
      handleSelectedDateRange={this.handleSelectedDateRange}/>
>>>>>>> 755b8671b987cb9392282ef3d0dab633ab388446
      </div>
    )
  }
}

export default SearchFormBox;
