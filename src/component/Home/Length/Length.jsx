import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './length.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale.svg"
import hot from "../../../assets/hot-1.svg"
import beaker from "../../../assets/beaker1.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';

export default class Length extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: '',
            length1: '',
        }
    }
    handleLengths = (event) => {
        let length = event.target.value;
        this.setState({
            length: event.target.value
        })
        console.log("length", length)
    }
    handleLength1 = (event) => {
        let length1 = event.target.value;
        this.setState({
            length1: event.target.value
        })
        console.log("length1", length1)
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
                            <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.length} onChange={this.handleLengths}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Centimeter</MenuItem>
                                <MenuItem value={20}>Kilometer</MenuItem>
                                <MenuItem value={30}>Millimeter</MenuItem>
                                <MenuItem value={40}>Micrometer</MenuItem>
                                <MenuItem value={50}>Mile</MenuItem>
                                <MenuItem value={60}>Foot</MenuItem>
                                <MenuItem value={70}>Inch</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.length1} onChange={this.handleLength1}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Centimeter</MenuItem>
                                <MenuItem value={20}>kilometer</MenuItem>
                                <MenuItem value={30}>millimeter</MenuItem>
                                <MenuItem value={40}>micrometer</MenuItem>
                                <MenuItem value={50}>mile</MenuItem>
                                <MenuItem value={60}>Foot</MenuItem>
                                <MenuItem value={70}>Inch</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
