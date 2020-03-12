import React, { Component } from 'react'
import VitalComponent from './VitalComponent'

class MainComponent extends Component {
    state = { }
    render() { 
        return ( 
            <div className="m-4">
                <div className="row">   
                    <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">CPR</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm">
                                    <button className="text-Primary btn bg-dark btn-outline-primary btn-block m-1">Start</button>
                                </div>
                                <div className="col-sm">
                                    <button className="text-Primary btn bg-dark btn-outline-primary btn-block m-1">Stop</button>
                                </div>
                                <div className="col-sm">
                                    <button className="text-Primary btn bg-dark btn-outline-primary btn-block m-1">Pulse Check</button>
                                </div>
                            </div>      
                            <div className="row">
                                <div className="col-sm">
                                    <button className="text-Primary btn bg-dark btn-outline-primary btn-block m-1">R.O.S.C</button>
                                </div>
                                <div className="col-sm">
                                    <button className="text-Primary btn bg-dark btn-outline-primary btn-block m-1">T.O.D</button>
                                </div>
                            </div>                         
                        </div>                        
                    </div>
                    <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">Rhythm</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Asystole</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Pulseless V-Tach</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">V-Fib</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">PEA</button>
                            </div>
                            <div className="row">
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">1st&#176; AV Block</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">2nd&#176; AV Block Type-1</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">2nd&#176; AV Block Type-2</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Complete Heart Block</button>
                            </div>
                            <div className="row">
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">SVT</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">A-Flutter</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">A-Fib</button>
                            </div>
                            <div className="row">
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Mono V-Tach</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Poly V-Tach</button>
                                <button className="col-sm text-Primary btn bg-dark btn-outline-primary btn-block m-1">Torsades</button>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">Defibrillate</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-group border-dark rounded mb-2">
                                <select className="custom-select" id="joulesGroup">
                                    <option selected>Joules</option>
                                    <option value="1">1-10</option>
                                    <option value="2">15</option>
                                    <option value="3">20</option>
                                    <option value="4">30</option>
                                    <option value="5">50</option>
                                    <option value="6">70</option>
                                    <option value="7">100</option>
                                    <option value="8">120</option>
                                    <option value="9">150</option>
                                    <option value="10">170</option>
                                    <option value="11">200</option>
                                </select>
                                <div className="input-group-append">
                                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block" for="joulesGroup">Shock</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">Notes</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-group border-dark rounded mb-2">
                                <input type="text" className="form-control border-primary"></input>
                                <div className="input-group-append">
                                    <button className="text-Primary bg-dark btn btn-outline-primary btn-block">Add </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
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
                    <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">Vitals</h5>
                        </div>
                        <div className="card-body">
                            <VitalComponent/>                            
                        </div>
                    </div>
                </div>               
                <div className="row">
                    <div className="col-lg card m-1 p-4 border border-dark bg-dark rounded">
                        <div className="card-header bg-secondary">
                            <h5 className="m-auto">Log</h5>
                        </div>
                        <div className="card-body">
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