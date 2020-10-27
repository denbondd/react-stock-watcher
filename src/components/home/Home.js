import React from 'react'
import './Home.css'
import search from '../../images/search_icon.svg'
import Graph from '../graph/Graph'
import MoreInfo from '../moreInfo/MoreInfo';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreInfo: false
        };
    }

    changeShowMoreInfoState = () => {
        this.setState({
            showMoreInfo: !this.state.showMoreInfo
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='more_info'>
                    {this.state.showMoreInfo && <MoreInfo />}
                </div>
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
