import React from 'react';
import { Router, Route, Switch } from 'react-router';
import PropertyList from './components/property/PropertyList'
import HomeContainer from './views/Home';

const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/properties" component={PropertyList} />
    </Switch>
  </Router>
);

export default createRoutes;