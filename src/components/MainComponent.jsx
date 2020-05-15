import React from 'react'

//Components
import CprComponent from './subcomponents/CprComponent'
import EmergencyMedsComponent from './subcomponents/EmergencyMedsComponent'
import EmergencyProcComponent from './subcomponents/EmergencyProcComponent'
import VitalsComponent from './subcomponents/VitalsComponent'
import QuickLogComponent from './subcomponents/QuickLogComponent'

const MainComponent = ({addEvent, changeCprTimer, cprTimer, eventLog}) => {

    return ( 
        <div className="m-4">
            <div className="row">   
                <CprComponent changeCprTimer={changeCprTimer} cprTimer={cprTimer} addEvent={addEvent}/>
                <EmergencyMedsComponent addEvent={addEvent} cprTimer={cprTimer}/>
                <EmergencyProcComponent/>   
                <VitalsComponent/>
            </div>
            <div className="row">
                {/* <EmergencyProcComponent/>   
                <VitalsComponent/> */}
                <QuickLogComponent eventLog={eventLog}/>
            </div>  
        </div>
    );
}

export default MainComponent;