import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../nav/Nav'
import Home from '../home/Home';
import Observed from '../observed/Observed'
import Login from '../login/Login'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className='mainPage'>
                    <Switch>
                        <Route path='/observed' component={Observed} />
                        <Route path='/login' component={Login} />
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
