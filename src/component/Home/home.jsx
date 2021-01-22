import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './home.css';
import { Card } from '@material-ui/core';
import scale from '../../assets/scale-1.svg';
import hot from "../../assets/hot-1.svg"
import beaker from "../../assets/beaker1.svg"
import Volume from './Volume/Volume';

class Home extends Component {
    handleLength = () => {
        this.props.history.push('/length')
    }
    handleTemperature = () => {
        this.props.history.push('/temperature');
    }
    handleVolume = () => {
        this.props.history.push('/volume')
    }

    render() {
        return (
            <div >
                <div className="homeContainer">
                    <AppBar id="appBar">
                        <h2> Welcome To Quantity Measurement</h2>
                    </AppBar>

                    <div id="chooseType">
                        <h4>CHOOSETYPE</h4>
                    </div>
                    <div className="cardContainer">

                        <Card id="card1" onClick={this.handleLength}>
                            <div>
                                <img src={scale} />
                            </div>
                            <div>
                                Length
                            </div>
                        </Card>
                        <Card id="card2" onClick={this.handleTemperature}>
                            <div>
                                <img src={hot} />
                            </div>
                            <div>
                                Temperature
                            </div>
                        </Card>
                        <Card id="card3" onClick={this.handleVolume}>
                            <div>
                                <img src={beaker} />
                            </div>
                            <div>
                                Volume
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;