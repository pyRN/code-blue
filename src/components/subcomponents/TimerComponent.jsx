import React, { Component } from 'react'

class TimerComponent extends Component {
    state = {  }
    render() { 
        return (
            <h2>{this.props.time}</h2>
        );
    }
}

export default TimerComponent;