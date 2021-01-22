import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './volume.css';
import { Card } from '@material-ui/core';
import scale from "../../../assets/scale-1.svg"
import hot from "../../../assets/hot-1.svg"
import beaker from "../../../assets/beaker.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';
import VolumeConvertor from '../../../Services/volumeConvertor';

let objVolume=new VolumeConvertor();
var result=0;

export default class Volume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setFromVolume: '',
            setToVolume: '',
            setFromVolumeText:''
        }
    }
    handleChangesFrom = (event) => {
        this.setState({
            setFromVolume: event.target.value
        })
        this.state.setFromVolume=event.target.value;
        this.result=objVolume.Calculate(this.state.setFromVolumeText,this.state.setFromVolume,this.state.setToVolume)
    };
    handleChangesToo = (event) => {
        this.setState({
            setToVolume: event.target.value
        })
        this.state.setToVolume=event.target.value;
        this.result=objVolume.Calculate(this.state.setFromVolumeText,this.state.setFromVolume,this.state.setToVolume)
    };
    textsChanges=(event)=>{
        this.setState({
            setFromVolumeText: event.target.value
        })
        this.state.setFromVolumeText=event.target.value;
        this.result=objVolume.Calculate(this.state.setFromVolumeText,this.state.setFromVolume,this.state.setToVolume)
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
                            <TextField className="TextField" type="number" variant="outlined" size="small" onChange={this.textsChanges} ></TextField>
                        </div>
                        <div>
                            <Select id="Select" value={this.state.setFromVolume} onChange={this.handleChangesFrom}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Litres</MenuItem>
                                <MenuItem value={1000}>Millilitres</MenuItem>
                                <MenuItem value={0.000264172}>Gallons</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                        <div>
                            <TextField className="TextField" type="number" variant="outlined" size="small" value={this.result} ></TextField>  </div>
                        <div>
                            <Select id="Select" value={this.state.setToVolume} onChange={this.handleChangesToo}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Litres</MenuItem>
                                <MenuItem value={2}>Millilitres</MenuItem>
                                <MenuItem value={3}>Gallons</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}