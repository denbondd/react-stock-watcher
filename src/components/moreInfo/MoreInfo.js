import React from 'react'
import './MoreInfo.css'
import { getCompanyProfile } from '../../api/companyProfile'
import { getData } from '../../api/stockCandles'
import { createChart } from 'lightweight-charts'

function MoreInfo(props) {
    const [info, setState] = React.useState({
        logo: '',
        code: '',
        name: '',
        site: '',
        country: '',
        currency: '',
        exchange: '',
        ipo: '',
        phone: 0
    });

    if (info.code !== props.code) {
        getCompanyProfile(props.code, setCompanyData);
    };

    const myRef = React.useRef();
    getData(props.code, 'all', 6, drawChart);

    return (
        <div className='background' onClick={() => props.changeShowMoreInfoState()}>
            <div className='content'>
                <div className='leftSide'>
                    <div className='firstRow'>
                        <img
                            className='logo'
                            alt='logo'
                            src={info.logo} />
                        <div className='mainData'>
                            <p className='code no-marg'>{info.code}</p>
                            <p className='name no-marg'>{info.name}</p>
                            <a href={info.site} className='site no-marg'>Site</a>
                        </div>
                    </div>
                    <p><span className='list-title'>Country:</span> {info.country}</p>
                    <p><span className='list-title'>Currency:</span> {info.currency}</p>
                    <p><span className='list-title'>Exchange:</span> {info.exchange}</p>
                    <p><span className='list-title'>IPO:</span> {info.ipo}</p>
                    <p><span className='list-title'>Phone:</span> +{info.phone}</p>
                    <div ref={myRef} />
                </div>
            </div>
        </div>
    )

    function setCompanyData(data) {
        setState({
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

    function drawChart(data) {
        let chart = createChart(myRef.current, {
            width: 500,
            height: 300
        });
        let series = chart.addCandlestickSeries();
        series.setData(data);
    }
}

export default MoreInfo;