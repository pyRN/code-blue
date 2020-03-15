import React, { Component } from 'react'

class EmergencyMedsComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Emergency Medications</h5>
                </div>
                <div className="row card-body">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Epinepherine</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Amiodarone</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Narcan</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Atropine</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Sodium Bicarbonate</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Calcium Chloride</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Dextrose 50%</button>
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Lidocaine</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmergencyMedsComponent;