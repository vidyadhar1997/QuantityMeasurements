import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './temperature.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale-1.svg"
import hot from "../../../assets/hot.svg"
import beaker from "../../../assets/beaker1.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';

export default class Temprature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temprature: '',
            temprature1: '',
        }
    }
    handleTemperatures = (event) => {
        let temprature = event.target.value;
        this.setState({
            temprature: event.target.value
        })
        console.log("temprature", temprature)
    }
    handleTemperature1 = (event) => {
        let temprature1 = event.target.value;
        this.setState({
            temprature1: event.target.value
        })
        console.log("temprature1", temprature1)
    }
    handleLength = () => {
        this.props.history.push('/length');
    }
    handleTemperature = () => {
        this.props.history.push('/temperature');
    }
    handleVolume = () => {
        this.props.history.push('/volume');
    }
    render() {
        return (
            // <div className="helloTemperature">Hello Temperatures</div>
            <div className="homeContainer">
                <AppBar id="appBar">
                    <h2> Welcome To Quantity Measurement</h2>
                </AppBar>
                <div id="chooseType">
                    <h4>CHOOSETYPE</h4>
                </div>
                <div className="cardContainer">

                    <Card id="lengths"onClick={this.handleLength}>
                        <div>
                            <img src={scale} />
                        </div>
                        <div>
                            Length
                            </div>
                    </Card>
                    <Card id="temperature"onClick={this.handleTemperature}>
                        <div>
                            <img src={hot} />
                        </div>
                        <div>
                            Temperature
                            </div>
                    </Card>
                    <Card id="volumes"onClick={this.handleVolume}>
                        <div>
                            <img src={beaker} />
                        </div>
                        <div>
                            Volume
                            </div>
                    </Card>
                </div>
                <div id="containerForData">
                    <div>
                        <div id="text">
                            <br /><lable>FROM</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.temprature} onChange={this.handleTemperatures}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Celsius</MenuItem>
                                <MenuItem value={20}>Fahrenheit</MenuItem>
                                <MenuItem value={30}>kelvin</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.temprature1} onChange={this.handleTemperature1}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Celsius</MenuItem>
                                <MenuItem value={20}>Fahrenheit</MenuItem>
                                <MenuItem value={30}>kelvin</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}