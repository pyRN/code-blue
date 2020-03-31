import React, { useState } from 'react'
import ClockComponent from './ClockComponent'
import ShortTimerComponent from './ShortTimerComponent'
import TimerComponent from './TimerComponent'



const SecondNavBar = () => {
    const [cprTimerStatus, setCprTimerStatus] = useState(false)
    const [epiTimerStatus, setEprTimerStatus] = useState(false)
    const [codeTimerStatus, setCodeTimerStatus] = useState(false)

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom border-dark">
            <div className="collapse navbar-collapse" id="navbarResponsive">  
                <button className="text-primary btn btn-outline-dark ml-auto mr-3 btn-background"
                onClick={() => {setCodeTimerStatus(true); setCprTimerStatus(true)}}>Pt Arrive</button>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-2" >
                        <h2 className="navbar-brand text-dark">Code Start</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <TimerComponent timerStatus={codeTimerStatus}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Last Epinephrine</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ShortTimerComponent timerStatus={epiTimerStatus}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Current CPR</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ShortTimerComponent timerStatus={cprTimerStatus}/>
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