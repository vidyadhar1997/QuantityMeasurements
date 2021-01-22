import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './temperature.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale-1.svg"
import hot from "../../../assets/hot.svg"
import beaker from "../../../assets/beaker1.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import TemperatureConvertor from '../../../Services/temperatureConvertor';

let objTemperature=new TemperatureConvertor();
var result=0;

export default class Temprature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setFromTemperature: '',
            setToTemperature: '',
            setFromTemperatureText:''
        }
    }
    handleChangeFroms = (event) => {
        this.setState({
            setFromTemperature: event.target.value
        })
        this.state.setFromTemperature=event.target.value;
        this.result=objTemperature.Calculate(this.state.setFromTemperatureText,this.state.setFromTemperature,this.state.setToTemperature)
    };
    handleChangeToo = (event) => {
        this.setState({
            setToTemperature: event.target.value
        })
        this.state.setToTemperature=event.target.value;
        this.result=objTemperature.Calculate(this.state.setFromTemperatureText,this.state.setFromTemperature,this.state.setToTemperature)
    };
    textChanges=(event)=>{
        this.setState({
            setFromTemperatureText: event.target.value
        })
        this.state.setFromTemperatureText=event.target.value;
        this.result=objTemperature.Calculate(this.state.setFromTemperatureText,this.state.setFromTemperature,this.state.setToTemperature)
    };

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
                            <TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textChanges} ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.setFromTemperature} onChange={this.handleChangeFroms}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Celsius</MenuItem>
                                <MenuItem value={33.8}>Fahrenheit</MenuItem>
                                <MenuItem value={273.15}>kelvin</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.result}></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.setToTemperature} onChange={this.handleChangeToo}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Celsius</MenuItem>
                                <MenuItem value={2}>Fahrenheit</MenuItem>
                                <MenuItem value={3}>kelvin</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}