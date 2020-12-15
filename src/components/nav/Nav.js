import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';
import home from '../../images/home.svg'
import home_selected from '../../images/home_selected.svg'
import search from '../../images/search.svg'
import search_selected from '../../images/search_selected.svg'

function Nav() {
    return (
        <nav className='navigation'>
            <div className='container nav_content'>
                <p className='nav_element'>
                    <Link className='navLink' to='/'>
                        <img
                            src={window.location.pathname !== '/' ? home : home_selected}
                            alt='home.svg' />
                            Home
                        </Link>
                </p>
                <p className='title'>Stocks Watcher</p>
                <p className='nav_element'>
                    <Link className='navLink' to='/search'>
                        <img
                            src={window.location.pathname !== '/search' ? search : search_selected}
                            alt='home.svg' />
                            Search
                        </Link>
                </p>
            </div>
        </nav>
    )
}

// for rerendering on path changing
export default withRouter(Nav);
