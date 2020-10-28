import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';
import home from '../../images/home.svg'
import home_selected from '../../images/home_selected.svg'
import observed from '../../images/observed.svg'
import observed_selected from '../../images/observed_selected.svg'

function Nav() {
    return (
        <nav className='navigation'>
            <div className='container nav_content'>
                <ul className='nav_list'>
                    <li className='nav_element'>
                        <Link className='navLink' to='/'>
                            <img
                                src={window.location.pathname !== '/' ? home : home_selected}
                                alt='home.svg' />
                            Home
                        </Link>
                    </li>
                    <li className='nav_element'>
                        <Link className='navLink' to='/observed'>
                            <img
                                src={window.location.pathname !== '/observed' ? observed : observed_selected}
                                alt='home.svg' />
                            Observed
                        </Link>
                    </li>
                </ul>
                <p className='title'>Stocks Watcher</p>
                <Link to='/login' className='nav_element navLink'>Log in or Sign up</Link>
            </div>
        </nav>
    )
}

// for rerendering on path changing
export default withRouter(Nav);
