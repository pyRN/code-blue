import React from 'react'

const CprComponent = ({changeCprTimer, cprTimer, addEvent}) => {

    //Methods
    const handleStartBtnPress = () => {
        if(!cprTimer){
            let currentTime = new Date()
            addEvent({
                eventTimestamp: `${currentTime.getHours()}:${currentTime.getMinutes()
                }:${currentTime.getSeconds()}:${currentTime.getMilliseconds()} - ${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
                eventType: 'CPR',
                eventDescription: 'Start'
            })
            changeCprTimer(true)
        } 
    }

    const handleStopBtnPress = () => {
        if(cprTimer){
            let currentTime = new Date()
            addEvent({
                eventTimestamp: `${currentTime.getHours()}:${currentTime.getMinutes()
                }:${currentTime.getSeconds()}:${currentTime.getMilliseconds()} - ${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
                eventType: 'CPR',
                eventDescription: 'Stop'
            })
            changeCprTimer(false)
        }
    }

    const handlePulseCheck = () => {
        console.log("here")
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
                        onClick={handleStartBtnPress}>Start</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-light btn btn-danger btn-outline-dark btn-block m-1 start-stop-btn-hover"
                        onClick={handleStopBtnPress}>Stop</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" onClick={handlePulseCheck}>Pulse Check</button>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" >R.O.S.C</button>
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