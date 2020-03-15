import React, { Component } from 'react'

class VitalComponent extends Component {
    state = { }
    render() { 
        return ( 
            <div className="row">
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="HR" aria-label="Heart Rate"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="BP" aria-label="Blood Pressure"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Res" aria-label="Respirations"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="Temp" aria-label="Temperature"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="MAP" aria-label="Mean Arterial Pressure"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="SpO2" aria-label="O2 Saturation"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" placeholder="PCO2" aria-label="Partial CO2"/>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover">Add</button>
                        </div>
                    </div>
                    <button className="text-primary btn btn-background btn-background-hover btn-block m-1">Add All</button>
                </div>
            </div>
        );
    }
}

export default VitalComponent;