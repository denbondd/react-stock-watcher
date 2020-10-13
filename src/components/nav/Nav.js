import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className='navigation'>
            <ul className='nav_list'>
                <li className='nav_element'>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className='nav_element'>
                    <Link to='/observed'>
                        Observed
                    </Link>
                </li>
            </ul>
            <p className='title'>Stocks Watcher</p>
            <Link to='/login' className='nav_element'>Log in or Sign up</Link>
        </nav>
    )
}

export default Nav
