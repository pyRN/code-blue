/*
    TODO:
    1)Stop timers if either button is clickecd
    2)Add additional information to log once buttons clicked
    3)Reset CPR button [ROSC can go back into a code / spontaneous ROSC can occur after TOD called]
 */

import React from 'react';

function CodeEndComponent({addEvent, isPatientArrived}){
    const handleOnClick = (e) =>{
        e.preventDefault();
        if(!isPatientArrived)   return

        switch(e.target.id){
            case "roscBtn":
                addEvent('Code End', `R.O.S.C established`)
                break
            case "todBtn":
                addEvent('Code End', `T.O.D - ${new Date().toLocaleTimeString('en-US')}`)
                break
            default:
                break
        }
    }

    return(
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">End Code</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="roscBtn" onClick={handleOnClick}>R.O.S.C</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="todBtn" onClick={handleOnClick}>T.O.D</button>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default CodeEndComponent