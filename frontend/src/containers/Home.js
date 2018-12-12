import React from 'react';
import SearchFormBox from '../components/display/searchForm/SearchFormBox'

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      something: null
    }
  }

  render() {
    if(!this.props) return null;
    console.log(this.props);
    return (

      <div className="search-body">
        <SearchFormBox handleSubmit={this.props.handleSubmit}/>
        <div className='footer'>
          <img className="footer-image" src="https://firebasestorage.googleapis.com/v0/b/wherebnb-53946.appspot.com/o/NYC%2FEXPERIENCES%2FFooter.png?alt=media&token=a45323bc-b14d-4167-8677-48810ef23278" />


        </div>
      </div>

    )


  }
}

export default HomeContainer;
