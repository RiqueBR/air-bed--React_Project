import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainContainer from './views/Main.js';
import Navbar from './components/Navbar';
import SinglePropertyContainer from './views/SinglePropertyContainer';
import HomeContainer from './views/Home'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredProps: null
    }
    this.passToApp = this.passToApp.bind(this);
  }


  componentDidUpdate(prevState) {
    if (prevState.filteredProps !== this.state.filteredProps) {
      return
    }
  }

  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => {
                return <HomeContainer passToApp={this.passToApp} />
              }} />
              <Route exact path="/properties" render={() => {
                return <MainContainer data={this.state.filteredProps} />
              }} />
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

  passToApp(listOfProps) {
    this.setState({ filteredProps: listOfProps }, () => {
    })
  }

}

export default App;
