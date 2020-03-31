import React, { useState, useEffect  } from 'react'

//Components
import CprComponent from './subcomponents/CprComponent'
import DefibrillateComponent from './subcomponents/DefibrillateComponent'
import EmergencyMedsComponent from './subcomponents/EmergencyMedsComponent'
import EmergencyProcComponent from './subcomponents/EmergencyProcComponent'
import NotesComponent from './subcomponents/NotesComponent'
import RhythmComponent from './subcomponents/RhythmComponent'
import VitalsComponent from './subcomponents/VitalsComponent'


const MainComponent = () => {
    const [cprTimer, setCprTimer] = useState();

    return ( 
        <div className="m-4">
            <div className="row">   
                <CprComponent/>
                <RhythmComponent/>
            </div>
            <div className="row">
                <DefibrillateComponent/>
                <NotesComponent/>                    
            </div>
            <div className="row">
                <EmergencyMedsComponent/>
                <EmergencyProcComponent/>   
                <VitalsComponent/>
            </div>  
        </div>
    );
}

export default MainComponent;