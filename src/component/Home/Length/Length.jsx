import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './length.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale.svg"
import hot from "../../../assets/hot-1.svg"
import beaker from "../../../assets/beaker1.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import LengthConvertor from '../../../Services/lengthConvertor';

let objLength=new LengthConvertor();
var result=0;

export default class Length extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setFromLength: '',
            setToLength: '',
            setFromLengthText:''
        }
    }
    handleChangeFrom = (event) => {
        this.setState({
            setFromLength: event.target.value
        })
        this.state.setFromLength=event.target.value;
        this.result=objLength.calculate(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
    };
    handleChangeTo = (event) => {
        this.setState({
            setToLength: event.target.value
        })
        this.state.setToLength=event.target.value;
        this.result=objLength.calculate(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
    };
    textChange=(event)=>{
        this.setState({
            setFromLengthText: event.target.value
        })
        this.state.setFromLengthText=event.target.value;
        this.result=objLength.calculate(this.state.setFromLengthText,this.state.setFromLength,this.state.setToLength)
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
            <div className="homeContainer">
                <AppBar id="appBar">
                    <h2> Welcome To Quantity Measurement</h2>
                </AppBar>
                <div id="chooseType">
                    <h4>CHOOSETYPE</h4>
                </div>
                <div className="cardContainer">

                    <Card id="length"onClick={this.handleLength}>
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
                            <TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textChange} ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.setFromLength} onChange={this.handleChangeFrom}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={39370}>Kilometer</MenuItem>
                                <MenuItem value={39}>Meter</MenuItem>
                                <MenuItem value={0.393701}>Centimeter</MenuItem>
                                <MenuItem value={0.393701}>Millimeter</MenuItem>
                                <MenuItem value={0.0000393701}>Micrometer</MenuItem>
                                <MenuItem value={63360}>Mile</MenuItem>
                                <MenuItem value={12}>Foot</MenuItem>
                                <MenuItem value={1}>Inch</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.result} ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.setToLength} onChange={this.handleChangeTo}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Kilometer</MenuItem>
                                <MenuItem value={2}>Meter</MenuItem>
                                <MenuItem value={3}>Centimeter</MenuItem>
                                <MenuItem value={4}>Millimeter</MenuItem>
                                <MenuItem value={5}>Micrometer</MenuItem>
                                <MenuItem value={6}>Mile</MenuItem>
                                <MenuItem value={7}>Foot</MenuItem>
                                <MenuItem value={8}>Inch</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
