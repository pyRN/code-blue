import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import MainComponent from '../src/components/MainComponent'
import MedicationsListComponent from '../src/components/MedicationsListComponent'
import NavBarComponent from '../src/components/NavBarComponent'
import ProcedureListComponent from '../src/components/ProcedureListComponent'
import TeamListComponent from '../src/components/TeamListComponent'



function App() {
  return (
    <Router>
      <div>
        <NavBarComponent/>
        <Route path="/" exact component={MainComponent}/>
        <Route path="/team" component={TeamListComponent}/>
        <Route path="/procedures" component={ProcedureListComponent}/>
        <Route path="/meds" component={MedicationsListComponent}/>
      </div>
      
    </Router>
  );
}

export default App;