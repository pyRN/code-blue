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
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Asystole</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Pulseless V-Tach</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">V-Fib</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">PEA</button>
                    </div>
                    <div className="row">
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">1st&#176; AV Block</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">2nd&#176; AV Block Type-1</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">2nd&#176; AV Block Type-2</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Complete Heart Block</button>
                    </div>
                    <div className="row">
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">SVT</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">A-Flutter</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">A-Fib</button>
                    </div>
                    <div className="row">
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Mono V-Tach</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Poly V-Tach</button>
                        <button className="col-sm text-Primary btn btn-outline-primary btn-block m-1 btn-background">Torsades</button>
                    </div>
                </div>                        
            </div>
        );
    }
}
 
export default RhythmComponent;