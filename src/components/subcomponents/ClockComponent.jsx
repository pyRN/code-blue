import React, { Component } from 'react'

class ClockComponent extends Component {
    state = {  }
    render() { 
        return (
            <h2>{this.props.date.toLocaleTimeString('en-GB')}</h2>
        );
    }
}

export default ClockComponent;