import React from 'react'
import VitalComponent from './VitalComponent'

function VitalsComponent({isPatientArrived}){
    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Vitals</h5>
            </div>
            <div className="card-body">
                <div className>
                    <VitalComponent isPatientArrived={isPatientArrived}/>   
                </div>                         
            </div>
        </div>
    )
}

export default VitalsComponent;