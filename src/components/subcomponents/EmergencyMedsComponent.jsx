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
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Epinepherine</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Amiodarone</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Narcan</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Atropine</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Sodium Bicarbonate</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Calcium Chloride</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Dextrose 50%</button>
                        <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Lidocaine</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmergencyMedsComponent;