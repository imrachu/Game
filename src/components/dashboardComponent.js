import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    // this.launchDashboard();
    this.state = {
        number: ' ',
        random: Math.floor((Math.random() * (100)) + 1),

    };
  } 

  // launchDashboard() {
  //   setInterval(()=>{
  //     console.log('Loading Dashoard...')
  //     this.setState({
  //     })
  //   }, 1000)  
  // }

  mySubmitHandler = (event) => {
    event.preventDefault();
    if (!Number(this.state.number)) {
      alert("Invalid Number");
    }
    else{
      alert("You are submitting " + this.state.number);
    }
    let diff = Math.abs(this.state.number - this.state.random);
       
      if(diff === 0 ) {
        console.log("Correct");
        alert("GREEN.!!");
        let window = 100;
        this.setState({random: Math.floor((Math.random() * (100 + window)) + 1)})

      }
      else if(diff >= 1 && diff <= 4) {
        console.log("Hot");
        alert("RED.!!");
      }
      else if(diff >= 5 && diff <= 15) {
        console.log("Warm");
        alert("YELLOW.!!");
      }
      else {
        console.log("Cold");
        alert("BLUE.!!");
      }
    
  }
  myChangeHandler = (event) => {
    this.setState({number: event.target.value});
  }
  
  render() {
    return (
    <div className="center">
      <form onSubmit={this.mySubmitHandler}>
      <label>
        Enter your number here<br/>
        <input type="text" onChange={this.myChangeHandler}/>
      </label><br/>
      <button type="submit">Check!!</button><br/>
      </form>
    </div>
    );
  }
  
  
}// end
