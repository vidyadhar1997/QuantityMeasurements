import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './home.css';
import { Card } from '@material-ui/core';
import scale from '../../assets/scale-1.svg';
import hot from "../../assets/hot-1.svg"
import beaker from "../../assets/beaker1.svg"
import { TextField, MenuItem, Select } from '@material-ui/core';

class Home extends Component {
    constructor(){
        super();
        this.state={
            scale:'',
            scale1:'',
        }
    }
    handleChange=(event)=>{
       let scale=event.target.value;
       this.setState({
           scale:event.target.value
       })
       console.log("scale",scale)
    }
    handleChange1=(event)=>{
        let scale1=event.target.value;
        this.setState({
            scale1:event.target.value
        })
        console.log("scale",scale1)
     }
    render() {
        return (
            <div >
                {/* <div className="header">
            <div id="quanment">
                Quanment
            </div>
            <div id="history">
                History
            </div>
            </div> */}
                <div className="homeContainer">
                    <AppBar id="appBar">
                        <h2> Welcome To Quantity Measurement</h2>
                    </AppBar>

                    <div id="chooseType">
                        <h4>CHOOSETYPE</h4>
                    </div>
                    <div className="cardContainer">

                        <Card id="card1">
                            <div onClick={this.lengthArr}>
                                <img src={scale} />
                            </div>
                            <div>
                                Length
                            </div>
                        </Card>
                        <Card id="card2">
                            <div>
                                <img src={hot} />
                            </div>
                            <div>
                                Temperature
                            </div>
                        </Card>
                        <Card id="card3">
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
                                <Select id="Select" value={this.state.scale}onChange={this.handleChange}>
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
                        <div>
                        <div id="text">
                            <br /><lable>To</lable><br /></div>
                            <div>
                                <TextField className="TextField" type="number" variant="outlined" size="small" ></TextField>  </div>
                            <div>
                                <Select id="Select" value={this.state.scale1}onChange={this.handleChange1}>
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
            </div>
        )
    }
}

export default Home;