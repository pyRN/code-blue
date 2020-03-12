import React, { Component } from 'react'

class CprComponent extends Component {
    state = {  }
    render() { 
        return ( 
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
        );
    }
}

export default CprComponent;