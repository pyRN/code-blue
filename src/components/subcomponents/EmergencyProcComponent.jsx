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
                    <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Intubate</button>
                    <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">I.V. Access</button>
                    <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Central Line</button>
                    <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Arterial Line</button>
                    <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Chest Tube</button>
                </div>
            </div>
        );
    }
}

export default EmergencyProcComponent;