import React from 'react'

//Components
import CprComponent from './subcomponents/CprComponent'
import EmergencyMedsComponent from './subcomponents/EmergencyMedsComponent'
import EmergencyProcComponent from './subcomponents/EmergencyProcComponent'
import NotesComponent from './subcomponents/NotesComponent'
import VitalsComponent from './subcomponents/VitalsComponent'

const MainComponent = ({addEvent, changeCprTimer, cprTimer}) => {

    return ( 
        <div className="m-4">
            <div className="row">   
                <CprComponent changeCprTimer={changeCprTimer} cprTimer={cprTimer} addEvent={addEvent}/>
                <EmergencyMedsComponent/>
            </div>
            <div className="row">
                {/* <NotesComponent addEvent={addEvent}/>  */}
                <EmergencyProcComponent/>   
                <VitalsComponent/>
            </div>  
        </div>
    );
}

export default MainComponent;