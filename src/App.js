import React, { Component, useEffect} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchLocations } from './actions/locationsActions'

import PropertyList from './views/ListView.js';
import Navbar from './components/Navbar';
import SinglePropertyContainer from './views/SinglePropertyContainer';
import HomeContainer from './views/Home'

import './App.css';

const App = ({dispatch}) => {

  useEffect(() => {
    dispatch(fetchLocations())
  }, [dispatch])

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filteredProps: null
  //   }
  //   this.passToApp = this.passToApp.bind(this);
  // }

// componentDidMount() {
//   debugger;
//   return fetchLocations()
// }

  // componentDidUpdate(prevState) {
  //   if (prevState.filteredProps !== this.state.filteredProps) {
  //     return
  //   }
  // }

  // passToApp(listOfProps) {
  //   this.setState({ filteredProps: listOfProps }, () => {
  //   })
  // }

  // render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => {
                return <HomeContainer  />
              }} />
              {/* <Route exact path="/properties" render={() => {
                return <PropertyList data={this.state.filteredProps} />
              }} /> */}
              {/* <Route exact path="/properties/:id" render={(props) => {
                const id = props.match.params.id;
                return <SinglePropertyContainer id={id} />;
              }} /> */}
            </Switch>


          </React.Fragment>
        </Router>
      </div>

    );
  // }
}

const mapStateToProps = state => ({
  loading_locations: state.locations.loading,
  locations: state.locations,
  hasErrors: state.locations.hasErrors,
})

export default connect(mapStateToProps)(App)
