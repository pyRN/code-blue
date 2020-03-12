import React, { Component } from 'react'
import VitalComponent from './VitalComponent'

class VitalsComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Vitals</h5>
                </div>
                <div className="card-body">
                    <VitalComponent/>                            
                </div>
            </div>
        );
    }
}

export default VitalsComponent;