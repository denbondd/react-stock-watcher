import React from 'react'
import './MoreInfo.css'
import { getCompanyProfile } from '../../api/companyProfile'
import { getData } from '../../api/stockCandles'
import { createChart } from 'lightweight-charts'

let currentChartSeries;
function MoreInfo(props) {
    const [info, setInfo] = React.useState({
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
    if (currentChartSeries === undefined) {
        getData(props.code, 'all', 6, drawChart);
    };

    let close = () => {
        currentChartSeries = undefined;
        props.changeShowMoreInfoState();
    }

    return (
        <div className='more_info'>
            <div className='content'>
                <div className='closeMoreInfo-btn' onClick={close} />
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
                </div>
                <div ref={myRef} />
            </div>
        </div>
    )

    function setCompanyData(data) {
        setInfo({
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
        try {
            if (currentChartSeries === undefined) {
                let chart = createChart(myRef.current, {
                    width: 500,
                    height: 300,
                });
                let series = chart.addCandlestickSeries();
                currentChartSeries = series;
                //builds only one time, clean currentChartSeries after moreinfo close
            }
            currentChartSeries.setData(data);
        } catch (error) { console.error(error); }
    }
}

export default MoreInfo;