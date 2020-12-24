import React from 'react'
import search from '../../images/search_icon.svg'
import './Search.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company: ''
        }
    }

    searchEditText;

    componentDidMount() {
        this.searchEditText = document.getElementById('searchInp');
    }

    onSearchButtonClick = () => {
        this.setState({company: this.searchEditText.value})
    }

    render() {
        return (
            <div>
                <div className='first_row'>
                    <div className='search'>
                        <button className='search_btn' onClick={this.onSearchButtonClick}>
                            <img className='search_icon' src={search} alt='seacch_icon' />
                        </button>
                        <input id='searchInp' className='search_input' placeholder='Search a stock' />
                    </div>
                    <p className='search_hint'>You have to write company's NASDAQ</p>
                </div>
            </div>
        )
    }
}

