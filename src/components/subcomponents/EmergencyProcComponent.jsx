import React, { Component } from 'react'

class EmergencyProcComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Emergency Procedures</h5>
                </div>
                <div className="card-body">
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Intubate</button>
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">I.V. Access</button>
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Central Line</button>
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Arterial Line</button>
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Chest Tube</button>
                </div>
            </div>
        );
    }
}

export default EmergencyProcComponent;