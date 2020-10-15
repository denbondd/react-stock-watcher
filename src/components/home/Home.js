import React from 'react'
import './Home.css'
import search from '../../images/search_icon.svg'

function Home() {
    return (
        <div className='container'>
            <div className='first_section'>
                <p className='recom_title'>Recommended</p>
                <div className='search'>
                    <button className='search_btn'>
                        <img className='search_icon' src={search} alt='seacch_icon' />
                    </button>
                    <input className='search_input' placeholder='Search a stock' />
                </div>
            </div>
            <div className='graphs'>
                
            </div>
        </div>
    )
}

export default Home
