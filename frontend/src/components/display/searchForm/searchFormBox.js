import React, {Component} from 'react'
import SearchForm from './SearchForm'
import Request from '../../../helpers/Request';

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
    //  this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/properties').then(data => {
      this.setState({
        data: data
      })
    })


  }

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
    if(!this.state.data) return null;

    return (
      <div>
      <h2>title</h2>
      <p>paragraph</p>
      <SearchForm filteredData={this.filterLocationData()}
      fullData={this.state.data}
      handleLocationChange={this.handleLocationChange}
      handleSelectedDateRange={this.handleSelectedDateRange}/>
      </div>
    )
  }
}

export default SearchFormBox;
