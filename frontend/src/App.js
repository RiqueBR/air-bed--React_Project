import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MainContainer from './containers/Main.js';
import Navbar from './Navbar';
import SinglePropertyContainer from './containers/SinglePropertyContainer';
import HomeContainer from './containers/Home'


class App extends Component {

  constructor(props){
    super(props);
    this.passListToApp = this.passListToApp.bind(this);

    this.state = {
      arrayList: null
    }

  }



  componentDidUpdate(prevState){
    if(prevState.arrayList !== this.state.arrayList){
      // window.location = "/properties"
      console.log(this.state.arrayList);
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
                return <HomeContainer passToApp={this.passListToApp}/>
            }}/>
            <Route exact path="/properties" render={() => {
                return <MainContainer  data={this.state.arrayList}/>
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

  this.passListToApp = this.passListToApp.bind(this);
}

passListToApp(listOfProps){
  this.setState({arrayList: listOfProps}, () => {
    console.log(this.state.arrayList);
    // window.location = "/properties"
  })
}

}

export default App;
