import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
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

  const [eventLog, setEventLog] = useState([
    // {
    //   eventTimestamp: new Date(),
    //   eventType: 'Team Member Entered',
    //   eventDescription: 'Jacob Mayeux RN Emergency Room'
    // }
  ])

  const addEvent = newEvent => {
    const newEventLog = [...eventLog, {newEvent}]
    // setEventLog(newEventLog)
  }

  // console.log(eventLog) 


  return (
    <div className="mainContainer">      
      <Router>      
        <div className="static-top sticky-top">
          <NavBarComponent/>
          <SecondNavBar/>
        </div>
        <Route path="/" exact render={props => <MainComponent addNote={addEvent}/>}/>
        <Route path="/log" render={props => <LogComponent eventLog={eventLog}/>}/>
        <Route path="/team" render={props => <TeamListComponent eventLog={eventLog}/>}/>
        <Route path="/procedures" render={props => <ProcedureListComponent/>}/>
        <Route path="/meds" render={props => <MedicationsListComponent/>}/>
        <Route path="/reference" render={props => <ReferenceComponent/>}/>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;