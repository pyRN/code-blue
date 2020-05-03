import React from 'react'
import ClockComponent from './ClockComponent'
import ShortTimerComponent from './ShortTimerComponent'
import TimerComponent from './TimerComponent'



const SecondNavBar = ({ cprTimer, patientArrived, codeTimer, epiTimer, addEvent, resetCprTimer, resetEpiTimer }) => {
    //Methods
    const patientArrivedBtnPress = () => {
        //Start Code and CPR timers once patient has arrived
        let currentTime = new Date();
        patientArrived(true)
        addEvent({
            eventTimestamp: `${currentTime.getHours()}:${currentTime.getMinutes()
            }:${currentTime.getSeconds()}:${currentTime.getMilliseconds()} - ${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
            eventType: "PATIENT ARRIVED",
            eventDescription: "Patient arrived to room"
        })

        document.getElementById("patientArrivedBtn").style.visibility = "hidden";
    }

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom border-dark">
            <div className="collapse navbar-collapse" id="navbarResponsive">  
                <button id="patientArrivedBtn" className="text-primary btn btn-outline-dark ml-auto mr-3 btn-background"
                onClick={patientArrivedBtnPress}>Pt Arrive</button>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-2" >
                        <h2 className="navbar-brand text-dark">Code Start</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <TimerComponent timerStatus={codeTimer}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Last Epinephrine</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ShortTimerComponent timerStatus={epiTimer} resetTimer={resetEpiTimer}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Current CPR</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ShortTimerComponent timerStatus={cprTimer} resetTimer={resetCprTimer}/>
                    </li>
                    <li className="nav-item mr-2" >
                        <h2 className="navbar-brand text-dark">Time</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ClockComponent/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SecondNavBar;