import React from 'react';
import SearchFormBox from '../components/display/searchForm/SearchFormBox'

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // componentDidMount() {
  //
  // }

  render() {
    return (

      <div>
      <SearchFormBox func={this.props.func}/>

      </div>
    )


  }
}

export default HomeContainer;
