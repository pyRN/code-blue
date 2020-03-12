import React from 'react';
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



function App() {
  return (
    <div className="mainContainer">      
      <Router>      
        <div className="static-top sticky-top">
          <NavBarComponent/>
          <SecondNavBar/>
        </div>
        <Route path="/" exact component={MainComponent}/>
        <Route path="/log" component={LogComponent}/>
        <Route path="/team" component={TeamListComponent}/>
        <Route path="/procedures" component={ProcedureListComponent}/>
        <Route path="/meds" component={MedicationsListComponent}/>
        <Route path="/reference" component={ReferenceComponent}/>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;