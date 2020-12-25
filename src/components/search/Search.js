import React from 'react'
import search from '../../images/search_icon.svg'
import { getCompanyProfile } from '../../api/companyProfile'
import './Search.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            code: '',
            name: '',
            site: '',
            country: '',
            currency: '',
            exchange: '',
            ipo: '',
            phone: 0
        }
    }

    searchEditText;

    componentDidMount() {
        this.searchEditText = document.getElementById('searchInp');
    }

    onSearchButtonClick = () => {
        getCompanyProfile(this.searchEditText.value, this.setSearchData)
    }

    setSearchData = (data) => {
        this.cleanState();
        console.log(data);
        if (Object.keys(data).length === 0) {
            this.setState({ name: `Can't find any company with this NASDAQ` })
        } else {
            this.setState({
                logo: data.logo,
                code: data.ticker,
                name: data.name,
                site: data.weburl,
                country: data.country,
                currency: data.currency,
                exchange: data.exchange,
                ipo: data.ipo,
                phone: data.phone
            })
        }
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
                <div className='leftSide'>
                    <div className='firstRow'>
                        <img
                            className='logo'
                            alt='logo'
                            src={this.state.logo} />
                        <div className='mainData'>
                            <p className='code no-marg'>{this.state.code}</p>
                            <p className='name no-marg'>{this.state.name}</p>
                            <a href={this.state.site} className='site no-marg'>Site</a>
                        </div>
                    </div>
                    <p><span className='list-title'>Country:</span> {this.state.country}</p>
                    <p><span className='list-title'>Currency:</span> {this.state.currency}</p>
                    <p><span className='list-title'>Exchange:</span> {this.state.exchange}</p>
                    <p><span className='list-title'>IPO:</span> {this.state.ipo}</p>
                    <p><span className='list-title'>Phone:</span> +{this.state.phone}</p>
                </div>
            </div>
        )
    }

    cleanState = () => {
        this.setState({
            logo: '',
            code: '',
            name: '',
            site: '',
            country: '',
            currency: '',
            exchange: '',
            ipo: '',
            phone: 0
        })
    }
}

