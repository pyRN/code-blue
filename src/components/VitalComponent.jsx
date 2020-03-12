import React, { Component } from 'react'

class VitalComponent extends Component {
    state = { }
    render() { 
        return ( 
            <div className="row">
                <div className="col-sm">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="HR" aria-label="Heart Rate"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="BP" aria-label="Blood Pressure"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Res" aria-label="Respirations"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="Temp" aria-label="Temperature"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="MAP" aria-label="Mean Arterial Pressure"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="SpO2" aria-label="O2 Saturation"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" placeholder="PCO2" aria-label="Partial CO2"/>
                        <div class="input-group-append">
                            <button class="text-Primary bg-dark btn btn-outline-primary btn-block">Add</button>
                        </div>
                    </div>
                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block m-1">Add All</button>
                </div>
            </div>
        );
    }
}

export default VitalComponent;