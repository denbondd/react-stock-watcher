import React from 'react'
import './Graph.css'
import { createChart } from 'lightweight-charts'
import addToObserved from '../../images/addToObserved.svg'
import { getData } from '../../api/stockCandles'

let listOfCharts = new Map();
function Graph(props) {
	const myRef = React.useRef();
	React.useEffect(() => {
		if (listOfCharts.get(props.id) === undefined) {
			getData(props.symbol, 'one', 9, makeChart);
		}
	});

	let onClick = () => {
		props.changeShowMoreInfoState(props.symbol);
	}

	return (
		<div className='graph-container'>
			<div ref={myRef} className='graph' />
			<div className='bottomSection'>
				<p className='showMoreInfo' onClick={onClick}>More Info</p>
				<div className='addToObserved'>
					<button>
						<p className='addToObserved-text'>Add to observed</p>
						<img className='addToObserved-icon'
							alt='observed_icon'
							src={addToObserved} />
					</button>
				</div>
			</div>
		</div>
	);

	function makeChart(data) {
		let width = 550;
		let height = 300;
		let chart = window.tvchart = createChart(myRef.current, {
			width: width,
			height: height,
			grid: {
				horzLines: {
					visible: false,
				},
			},
		});
		listOfCharts.set(props.id, chart)
	
		let series = chart.addAreaSeries({
			topColor: 'rgba(19, 68, 193, 0.4)',
			bottomColor: 'rgba(0, 120, 255, 0.0)',
			lineColor: 'rgba(19, 40, 153, 1.0)',
			lineWidth: 3
		});
	
		series.setData(data);
	
		let toolTip = document.createElement('div');
		toolTip.className = 'three-line-legend';
		myRef.current.appendChild(toolTip);
		toolTip.style.display = 'block';
		toolTip.style.left = 3 + 'px';
		toolTip.style.top = 3 + 'px';
	
		function setLastBarText() {
			let dateStr = data[data.length - 1].time.year + ' - ' + data[data.length - 1].time.month + ' - ' + data[data.length - 1].time.day;
			toolTip.innerHTML = `<div style="font-size: 24px; margin: 4px 0px; color: #20262E"> ${props.symbol}</div>` +
				'<div style="font-size: 22px; margin: 4px 0px; color: #20262E">' + data[data.length - 1].value + '</div>' +
				'<div>' + dateStr + '</div>';
		}
	
		setLastBarText();
	
		chart.subscribeCrosshairMove(function (param) {
			if (param === undefined || param.time === undefined || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
				setLastBarText();
			} else {
				let dateStr = param.time.year + ' - ' + param.time.month + ' - ' + param.time.day;
				let price = param.seriesPrices.get(series);
				toolTip.innerHTML = `<div style="font-size: 24px; margin: 4px 0px; color: #20262E"> ${props.symbol}</div>` +
					'<div style="font-size: 22px; margin: 4px 0px; color: #20262E">' + (Math.round(price * 100) / 100).toFixed(2) +
					'</div>' + '<div>' + dateStr + '</div>';
			}
		});
	}
}

export default Graph;