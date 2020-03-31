import React, { useState, useEffect } from 'react'

const CprComponent = (props) => {

    const [cprTime, setCprTime] = useState(false);
    
    return ( 
        <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
            <div className="card-header bg-secondary">
                <h5 className="m-auto">CPR</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm">
                        <button className="text-light btn btn-success btn-outline-dark btn-block m-1 start-stop-btn-hover" 
                        onClick={() => setCprTime(true)}>Start</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-light btn btn-danger btn-outline-dark btn-block m-1 start-stop-btn-hover"
                        onClick={() => setCprTime(false)}>Stop</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">Pulse Check</button>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">R.O.S.C</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background">T.O.D</button>
                    </div>
                </div>                         
            </div>                        
        </div>
    );
}

export default CprComponent;