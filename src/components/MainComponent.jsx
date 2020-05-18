import React from 'react'

//Components
import CodeEndComponent from './subcomponents/CodeEndComponent'
import CprComponent from './subcomponents/CprComponent'
import DefibrillateComponent from './subcomponents/DefibrillateComponent'
import EmergencyMedsComponent from './subcomponents/EmergencyMedsComponent'
import EmergencyProcComponent from './subcomponents/EmergencyProcComponent'
import NotesComponent from './subcomponents/NotesComponent'
import QuickLogComponent from './subcomponents/QuickLogComponent'
import RhythmComponent from './subcomponents/RhythmComponent'
import VitalsComponent from './subcomponents/VitalsComponent'


const MainComponent = ({addEvent, changeCprTimer, cprTimer, eventLog}) => {

    return ( 
        <div className="m-4">
            <div className="row">  
                <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                    <CprComponent changeCprTimer={changeCprTimer} cprTimer={cprTimer} addEvent={addEvent}/> 
                    <DefibrillateComponent addEvent={addEvent}/>
                    <RhythmComponent addEvent={addEvent}/>
                </div> 
                
                <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                    <EmergencyMedsComponent addEvent={addEvent} cprTimer={cprTimer}/>
                    <EmergencyProcComponent addEvent={addEvent} />  
                    <NotesComponent addEvent={addEvent}/> 
                </div>
                <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                    <VitalsComponent/>
                    <CodeEndComponent addEvent={addEvent}/>
                </div>
            </div>
            <div className="row">
                <QuickLogComponent eventLog={eventLog}/>
            </div>  
        </div>
    );
}

export default MainComponent;