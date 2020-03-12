import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import FooterComponent from '../src/components/FooterComponent'
import MainComponent from '../src/components/MainComponent'
import MedicationsListComponent from '../src/components/MedicationsListComponent'
import NavBarComponent from '../src/components/NavBarComponent'
import ProcedureListComponent from '../src/components/ProcedureListComponent'
import ReferenceComponent from '../src/components/ReferenceComponent'
import SecondNavBar from '../src/components/SecondNavBar'
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