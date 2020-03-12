import React, { Component } from 'react'

class RhythmComponent extends Component {
    state = {  }
    render() { 
        return ( 
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
        );
    }
}
 
export default RhythmComponent;