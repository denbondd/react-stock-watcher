import React from 'react'
import search from '../../images/search_icon.svg'
import './Search.css'

function Search() {
    return (
        <div>
            <div className='search'>
                <button className='search_btn'>
                    <img className='search_icon' src={search} alt='seacch_icon' />
                </button>
                <input className='search_input' placeholder='Search a stock' />
            </div>
        </div>
    )
}

export default Search
