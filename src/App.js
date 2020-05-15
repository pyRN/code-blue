import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Import Components
import FooterComponent from './components/subcomponents/FooterComponent'
import LogComponent from '../src/components/LogComponent'
import MainComponent from '../src/components/MainComponent'
import MedicationsListComponent from '../src/components/MedicationsListComponent'
import NavBarComponent from './components/subcomponents/NavBarComponent'
import ProcedureListComponent from '../src/components/ProcedureListComponent'
import ReferenceComponent from '../src/components/ReferenceComponent'
import SecondNavBar from './components/subcomponents/SecondNavBar'
import TeamListComponent from '../src/components/TeamListComponent'


const App = () => {
    //States
    const [eventLog, setEventLog] = useState([])
    const [cprTimer, setCprTimer] = useState(false)
    const [resetCprTime, setResetCprTime] = useState(true)
    const [codeTimer, setCodeTimer] = useState(false)
    const [epiTimer, setEpiTimer] = useState(false)
    const [resetEpiTime, setResetEpiTime] = useState(true)

    //Methods
    const addEvent = (eventType, eventDescription) => {
        /* Method used to add event to eventLog and update log view - Every action made should pass through this method */
        const addEvent = {
            eventTimestamp: new Date().toString(),
            eventType: eventType,
            eventDescription: eventDescription,
            eventIndex: eventLog.length 
        }
        
        setEventLog([...eventLog, addEvent])
    }

    const patientArrived = startTimer => {
        setCprTimer(startTimer)
        setCodeTimer(startTimer)
        setResetCprTime(false)
    }

    const changeCprTimer = startTimer => {
        setCprTimer(startTimer)
        setResetCprTime(!resetCprTime)
    }

    const changeEpiTimer = startTimer => {
        setEpiTimer(startTimer)
    }

    const changeCodeTimer = startTimer => {
        setCodeTimer(startTimer)
    }

    return (
        <div className="mainContainer">      
            <Router>      
                <div className="static-top sticky-top">
                <NavBarComponent/>
                <SecondNavBar 
                    cprTimer={cprTimer} 
                    patientArrived={patientArrived} 
                    codeTimer={codeTimer} 
                    epiTimer={epiTimer} 
                    addEvent={addEvent} 
                    resetCprTimer={resetCprTime} 
                    resetEpiTimer={resetEpiTime}/>
                </div>
                <Route path="/" exact render={props => <MainComponent addEvent={addEvent} changeCprTimer={changeCprTimer} cprTimer={cprTimer}/>}/>
                <Route path="/log" render={props => <LogComponent eventLog={eventLog}/>}/>
                <Route path="/team" render={props => <TeamListComponent/>}/>
                <Route path="/procedures" render={props => <ProcedureListComponent/>}/>
                <Route path="/meds" render={props => <MedicationsListComponent/>}/>
                <Route path="/reference" render={props => <ReferenceComponent/>}/>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;