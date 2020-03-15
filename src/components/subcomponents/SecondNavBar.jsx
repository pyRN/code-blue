import React, { Component, useState, useEffect } from 'react'
import ClockComponent from './ClockComponent'
import TimerComponent from './TimerComponent'



const SecondNavBar = () => {


    const [currentTime, setCurrentTime] = useState(new Date());
    const [codeTime, setCodeTime] = useState(0);
    const [epiTime, setEpiTime] = useState(0);
    const [cprTime, setCprTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(() => new Date());
        }, 1000);
    }, []);


    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom border-dark">
            <div className="collapse navbar-collapse" id="navbarResponsive">  
                <button className="text-primary btn btn-outline-dark ml-auto mr-3 btn-background">Pt Arrive</button>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mr-2" >
                        <h2 className="navbar-brand text-dark">Code Start</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <TimerComponent time={codeTime}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Last Epinephrine</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <TimerComponent time={epiTime}/>
                    </li>
                    <li className="nav-item mr-2">
                        <h2 className="navbar-brand text-dark">Current CPR</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <TimerComponent time={cprTime}/>
                    </li>
                    <li className="nav-item mr-2" >
                        <h2 className="navbar-brand text-dark">Time</h2>
                    </li>
                    <li className="nav-item mr-4">
                        <ClockComponent date={currentTime}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SecondNavBar;