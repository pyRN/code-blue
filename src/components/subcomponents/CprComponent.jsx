import React from 'react'

function CprComponent({changeCprTimer, cprTimer, addEvent, isPatientArrived, patientArrived}){
    let sCprButtonText = cprTimer ? 'Stop CPR' : 'Start CPR'

    //Styles
    let oCprButtonStyle = {
        backgroundColor: cprTimer ? 'red' : 'green',
        border: "1px solid black"
    }

    let oPtArrButtonStyle = {
        visibility: cprTimer === null ?  'visible' : 'hidden',
        backgroundColor: 'slateblue',
        border: "1px solid black"
    }

    const handleOnClick = (e) =>{

        //TODO - This is a hot mess, needs to be simplified and cleaned up
        switch(e.target.id){
            case "ptArriveBtn":

                patientArrived(true)
                addEvent("Arrival", "Patient Arrived, CPR In Progress")
                changeCprTimer(true)
                break
            case "cprBtn":
                if(!isPatientArrived){          //IF CPR button is pressed first versus patient arrived 
                    patientArrived(true)
                    addEvent("Arrival", "Patient Arrived, CPR In Progress")
                    changeCprTimer(true)
                }
                else if(!cprTimer){            
                    addEvent("CPR", "Start")
                    changeCprTimer(true)
                } 
                else{
                    addEvent("CPR", "Stop")
                    changeCprTimer(false)
                }
                break
            default:
                break
        }
    }
    
    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">CPR</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        cprTimer === null ?
                            <div className="col-sm">
                                <button className="text-light btn btn-outline-dark btn-block m-1 start-stop-btn-hover" 
                                id="ptArriveBtn" onClick={handleOnClick} style={oPtArrButtonStyle}>Pt Arrived</button>
                            </div>
                            :
                            null
                    }
                    <div className="col-sm">
                        <button className="text-light btn btn-outline-dark btn-block m-1 start-stop-btn-hover" 
                        id="cprBtn" onClick={handleOnClick} style={oCprButtonStyle}>{sCprButtonText}</button>
                    </div>
                </div>
            </div>                        
        </div>
    );
}

export default CprComponent;