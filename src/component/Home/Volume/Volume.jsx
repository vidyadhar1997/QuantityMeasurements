import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './volume.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale-1.svg"
import hot from "../../../assets/hot-1.svg"
import beaker from "../../../assets/beaker.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';

export default class Volume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: '',
            volume1: '',
        }
    }
    handleVolume = (event) => {
        let volume = event.target.value;
        this.setState({
            volume: event.target.value
        })
        console.log("volume", volume)
    }
    handleVolume1 = (event) => {
        let volume1 = event.target.value;
        this.setState({
            volume1: event.target.value
        })
        console.log("volume1", volume1)
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
                    <Card id="temperatures"onClick={this.handleTemperature}>
                        <div>
                            <img src={hot} />
                        </div>
                        <div>
                            Temperature
                            </div>
                    </Card>
                    <Card id="volume"onClick={this.handleVolume}>
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
                            <Select id="Select" value={this.state.volume} onChange={this.handleVolume}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Litres</MenuItem>
                                <MenuItem value={20}>Millilitres</MenuItem>
                                <MenuItem value={30}>Gallons</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.volume1} onChange={this.handleVolume1}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Litres</MenuItem>
                                <MenuItem value={20}>Millilitres</MenuItem>
                                <MenuItem value={30}>Gallons</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}