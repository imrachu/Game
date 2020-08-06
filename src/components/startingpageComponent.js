import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class startingPage extends Component {

  render() {
    return (
    <div className='App'> 
      <span>Number Game</span>
      <div className="center">
        <Button href="/dashboard" variant="warning" size="lg">PLAY.!</Button>
      </div>
    </div>
    )
  }
}