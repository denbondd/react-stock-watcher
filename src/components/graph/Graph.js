import React from 'react'
import './Graph.css'
import { createChart } from 'lightweight-charts'
import addToObserved from '../../images/addToObserved.svg'
// import { data as apiData } from '../../api/stockCandles'

function Graph(props) {
	const myRef = React.useRef();
	React.useEffect(() => {
		const request = require('request');
		let currentDate = new Date().getTime();
		let data = [{ time: '2020-10-14', value: 140 }]
		request(`https://finnhub.io/api/v1/stock/candle?symbol=IBM&resolution=D&from=1602288000&to=${currentDate}&token=bu1ut0f48v6sao5m3j2g`, { json: true }, function (error, response, body) {
			if (error) {
				console.log(error);
				return;
			}
			body['o'].forEach((element, index) => {
				let number = index + 1;
				data.push({ time: `2020-10-${(14 + number)}`, value: Math.round(element * 10) / 10 },)
			});
			data.shift();
			console.log(data);

			let width = 550;
			let height = 300;
			var chart = window.tvchart = createChart(myRef.current, {
				width: width,
				height: height,
				grid: {
					horzLines: {
						visible: false,
					},
				},
			});

			var series = chart.addAreaSeries({
				topColor: 'rgba(19, 68, 193, 0.4)',
				bottomColor: 'rgba(0, 120, 255, 0.0)',
				lineColor: 'rgba(19, 40, 153, 1.0)',
				lineWidth: 3
			});

			series.setData(data);

			var toolTip = document.createElement('div');
			toolTip.className = 'three-line-legend';
			myRef.current.appendChild(toolTip);
			toolTip.style.display = 'block';
			toolTip.style.left = 3 + 'px';
			toolTip.style.top = 3 + 'px';

			function setLastBarText() {
				var dateStr = data[data.length - 1].time.year + ' - ' + data[data.length - 1].time.month + ' - ' + data[data.length - 1].time.day;
				toolTip.innerHTML = '<div style="font-size: 24px; margin: 4px 0px; color: #20262E"> AEROSPACE</div>' + '<div style="font-size: 22px; margin: 4px 0px; color: #20262E">' + data[data.length - 1].value + '</div>' +
					'<div>' + dateStr + '</div>';
			}

			setLastBarText();

			chart.subscribeCrosshairMove(function (param) {
				if (param === undefined || param.time === undefined || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
					setLastBarText();
				} else {
					let dateStr = param.time.year + ' - ' + param.time.month + ' - ' + param.time.day;
					var price = param.seriesPrices.get(series);
					toolTip.innerHTML = '<div style="font-size: 24px; margin: 4px 0px; color: #20262E"> AEROSPACE</div>' + '<div style="font-size: 22px; margin: 4px 0px; color: #20262E">' + (Math.round(price * 100) / 100).toFixed(2) + '</div>' + '<div>' + dateStr + '</div>';
				}

			});
		});
	}, [])

	return (
		<div className='graph-container'>
			<div ref={myRef} className='graph' />
			<div className='addToObserved'>
				<button>
					<p className='addToObserved-text'>Add to observed</p>
					<img className='addToObserved-icon'
						alt='observed_icon'
						src={addToObserved} />
				</button>
			</div>
		</div>
	)
}

export default Graph
