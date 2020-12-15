import React from 'react'
import './Home.css'
import Graph from '../graph/Graph'
import MoreInfo from '../moreInfo/MoreInfo';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreInfo: false,
            showMIcode: ''
        };
    }

    changeShowMoreInfoState = (code) => {
        this.setState({
            showMoreInfo: !this.state.showMoreInfo,
            showMIcode: code
        });
        document.body.style.overflow = this.state.showMoreInfo ? 'unset' : 'hidden';
    }

    render() {
        return (
            <div className='container'>
                {this.state.showMoreInfo && <MoreInfo
                    changeShowMoreInfoState={this.changeShowMoreInfoState}
                    code={this.state.showMIcode} />}
                <div className='graphs'>
                    <Graph
                        id={1}
                        symbol='GOOGL'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                    <Graph
                        id={2}
                        symbol='AAPL'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                    <Graph
                        id={3}
                        symbol='FB'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                    <Graph
                        id={4}
                        symbol='NFLX'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                    <Graph
                        id={5}
                        symbol='AMZN'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                    <Graph
                        id={6}
                        symbol='TSLA'
                        changeShowMoreInfoState={this.changeShowMoreInfoState} />
                </div>
            </div>
        )
    }
}
