import React from 'react'

//Components
import CprComponent from './subcomponents/CprComponent'
import DefibrillateComponent from './subcomponents/DefibrillateComponent'
import EmergencyMedsComponent from './subcomponents/EmergencyMedsComponent'
import EmergencyProcComponent from './subcomponents/EmergencyProcComponent'
import NotesComponent from './subcomponents/NotesComponent'
import RhythmComponent from './subcomponents/RhythmComponent'
import VitalsComponent from './subcomponents/VitalsComponent'

const MainComponent = ({addEvent, changeCprTimer, cprTimer}) => {

    return ( 
        <div className="m-4">
            <div className="row">   
                <CprComponent changeCprTimer={changeCprTimer} cprTimer={cprTimer} addEvent={addEvent}/>
                <RhythmComponent/>
            </div>
            <div className="row">
                <DefibrillateComponent/>
                <NotesComponent addEvent={addEvent}/>                    
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