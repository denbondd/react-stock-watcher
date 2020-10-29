import React from 'react'
import './MoreInfo.css'
import { getCompanyProfile } from '../../api/companyProfile'

export default class MoreInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: '',
            code: '',
            ticker: '',
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
                                <p>{this.state.code}</p>
                                <p>{this.state.name}</p>
                                <a href={this.state.site}>Site</a>
                            </div>
                        </div>
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
        });
    }
}
