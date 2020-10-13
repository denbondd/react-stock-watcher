import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../nav/Nav'
import Home from '../home/Home';
import Observed from '../observed/Observed'
import Login from '../login/Login'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/observed' component={Observed} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
