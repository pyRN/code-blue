import React from 'react'

//Components
import DefibrillateComponent from './DefibrillateComponent'
import NotesComponent from './NotesComponent'
import RhythmComponent from './RhythmComponent'

function CprComponent({changeCprTimer, cprTimer, addEvent}){
    const onButtonPress = (e) =>{

        //TODO - This is a hot mess, needs to be simplified and cleaned up
        switch(e.target.id){
            case "cprStartBtn":
                if(!cprTimer){
                    addEvent("CPR", "Start")
                    changeCprTimer(true)
                } 
                break;
            case "cprStopBtn":
                if(cprTimer){
                    addEvent("CPR", "Stop")
                    changeCprTimer(false)
                }
                break;
            case "pulseCheckBtn":
                addEvent("CPR Paused", "Pulse Check")
                if(cprTimer){
                    changeCprTimer(false)
                }
                break;
            case "roscBtn":
                addEvent("Code End", "ROSC")
                if(cprTimer){
                    changeCprTimer(false)
                }
                break;
            case "todBtn":
                addEvent("Code End", "T.O.D")
                if(cprTimer){
                    changeCprTimer(false)
                }
                break;
            default:
                break;
        }
    }
    
    return ( 
        <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
            <div className="card-header bg-secondary">
                <h5 className="m-auto">CPR</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm">
                        <button className="text-light btn btn-success btn-outline-dark btn-block m-1 start-stop-btn-hover" 
                        id="cprStartBtn" onClick={onButtonPress}>Start</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-light btn btn-danger btn-outline-dark btn-block m-1 start-stop-btn-hover"
                        id="cprStopBtn" onClick={onButtonPress}>Stop</button>
                    </div>
                    
                </div>      
                <div className="row">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="pulseCheckBtn" onClick={onButtonPress}>Pulse Check</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="roscBtn" onClick={onButtonPress}>R.O.S.C</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="todBtn" onClick={onButtonPress}>T.O.D</button>
                    </div>
                </div>  
                <div className="row m-2">
                    <DefibrillateComponent addEvent={addEvent}/>
                    <RhythmComponent addEvent={addEvent}/>
                </div> 
                <div className="row m-2">
                    <NotesComponent addEvent={addEvent}/>           
                </div>        
            </div>                        
        </div>
    );
}

export default CprComponent;