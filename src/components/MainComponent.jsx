import React, { Component } from 'react'
// import EpiClockComponent from './EpiClockComponent'
import VitalComponent from './VitalComponent'
// import borderImage from '../media/heart_ekg_logo.svg'

class MainComponent extends Component {
    state = { 
        vitals: ["HR", "BP", "Res", "Temp", "MAP", "Sp02", "CO2"]
    }
    render() { 
        return ( 
            <div className="m-4">
                <div className="row">
                    
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">CPR</h5>
                        </div>
                        <div class="card-body">
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Start</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Stop</button>
                        </div>
                    </div>
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Defibrillate</h5>
                        </div>
                        <div class="card-body">
                            <div className="input-group border-dark rounded mb-3">
                                <input type="text" className="form-control border-primary"></input>
                                <div className="input-group-append border-dark">
                                    <button className="input-group-text text-primary bg-dark border-primary btn-outline-primary btn-lg">Shock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Notes</h5>
                        </div>
                        <div class="card-body">
                            <div className="input-group border-dark rounded mb-3">
                                <input type="text" className="form-control border-primary"></input>
                                <div className="input-group-append border-dark">
                                    <button className="input-group-text text-primary bg-dark border-primary btn-outline-primary btn-lg">Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Emergency Medications</h5>
                        </div>
                        <div class="card-body">
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Epinepherine</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Amiodarone</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Narcan</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Atropine</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Sodium Bicarbonate</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Calcium Chloride</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Dextrose 50%</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Lidocaine</button>
                        </div>
                    </div>
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Emergency Procedures</h5>
                        </div>
                        <div class="card-body">
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Intubate</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">I.V. Access</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Central Line</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Arterial Line</button>
                            <button className="text-Primary bg-dark btn-outline-primary btn-lg m-1">Chest Tube</button>
                        </div>
                    </div>   
                </div>               
                    
                <div className="row">
                    <div class="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Vitals</h5>
                        </div>
                        <div class="card-body">
                            {this.state.vitals.map((item) =>
                                <VitalComponent vital={item}/>
                            )} 
                        </div>
                    </div>
                    <div class="col-lg card m-1 p-4 border border-dark bg-dark rounded">
                        <div class="card-header bg-primary">
                            <h5 class="m-auto">Log</h5>
                        </div>
                        <div class="card-body">
                            <table className="table table-dark table-striped">
                                <tbody>
                                    <tr>
                                        <td>Bob Franks MD - ER - Arrived</td>
                                        <td>1700</td>
                                    </tr>
                                    <tr>
                                        <td>Sally Jones RN - ER - Arrived</td>
                                        <td>1700</td>
                                    </tr>
                                    <tr>
                                        <td>Chuck Berry RT - ER - Arrived</td>
                                        <td>1700</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainComponent;