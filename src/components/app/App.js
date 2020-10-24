import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../nav/Nav'
import Home from '../home/Home';
import Observed from '../observed/Observed'
import Login from '../login/Login'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMoreInfo: false
    };
  }

  changeState = () => {
    this.setState({
      showMoreInfo: !this.state.showMoreInfo
    });
  }

  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path='/observed' component={Observed} />
          <Route path='/login' component={Login} />
          <Route path='/'>
            {this.state.showMoreInfo && <Nav />}
            <Home changeState={this.changeState} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
