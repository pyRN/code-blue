import React, { Component } from 'react'

class VitalComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="input-group border-dark rounded mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text text-primary bg-dark btn-outline-primary btn-sm">{this.props.vital}</span>
                </div>
                <input type="text" className="form-control"></input>
                <div className="input-group-append">
                    <button className="input-group-text text-primary bg-dark btn-outline-primary btn-lg">Add</button>
                </div>
            </div>
        );
    }
}

export default VitalComponent;