import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from '../nav/Nav'
import Home from '../home/Home';
import Search from '../search/Search'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className='mainPage'>
                    <Switch>
                        <Route path='/search' component={Search} />
                        <Route path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
