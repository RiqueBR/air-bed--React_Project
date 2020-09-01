import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchLocations } from './actions/locationsActions'
// import PropertyList from './components/property/PropertyList'

import Navbar from './components/Navbar';
// import HomeContainer from './views/Home'

import './App.css';

const App = ({ dispatch }) => {

  useEffect(() => {
    dispatch(fetchLocations())
  }, [])

  return (
      <div>
          <Router>
              <React.Fragment>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={ HomeContainer }/>
                      <Route exact path="/properties" component={ PropertyList }/>
                      {/* <Route exact path="/properties/:id" render={(props) => {
                const id = props.match.params.id;
                return <SinglePropertyContainer id={id} />;
              }} /> */}
                  </Switch>

              </React.Fragment>
          </Router>
      </div>

  );
}

const mapStateToProps = state => ({
  loading: state.locations.loading,
  locations: state.locations,
  hasErrors: state.locations.hasErrors,
})

export default connect(mapStateToProps)(App)
