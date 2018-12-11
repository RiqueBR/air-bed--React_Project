import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MainContainer from './containers/Main.js';
import Navbar from './Navbar';
import SinglePropertyContainer from './containers/SinglePropertyContainer';
import HomeContainer from './containers/Home'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/properties" component={MainContainer} />
            <Route exact path="/properties/:id" render={(props) => {
              const id = props.match.params.id;
              return <SinglePropertyContainer id={id} />;
            }} />
          </Switch>


          </React.Fragment>
        </Router>
      </div>

    );
  }
}

export default App;
