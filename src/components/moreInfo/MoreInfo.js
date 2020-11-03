import React from 'react'
import './MoreInfo.css'
import { getCompanyProfile } from '../../api/companyProfile'
import { getData } from '../../api/stockCandles'

export default class MoreInfo extends React.Component {
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
        };
        this.setData = this.setData.bind(this);
    }

    render() {
        if (this.state.code !== this.props.code) {
            getCompanyProfile(this.props.code, this.setData);
        };
        getData(0, this.props.code, 'all', 6, console.log, null)
        return (
            <div className='background' onClick={() => this.props.changeShowMoreInfoState()}>
                <div className='content'>
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
            </div>
        )
    }

    setData(data) {
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
        });
    }
}
