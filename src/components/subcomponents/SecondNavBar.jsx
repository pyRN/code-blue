import React from 'react'
import ClockComponent from './ClockComponent'
import ShortTimerComponent from './ShortTimerComponent'
import TimerComponent from './TimerComponent'

function SecondNavBar({ cprTimer, patientArrived, codeTimer, epiTimer, addEvent, resetCprTimer, resetEpiTimer }){
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom border-dark">
            <div className="collapse navbar-collapse" id="navbarResponsive"> 
                <ul className="navbar-nav m-auto">
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