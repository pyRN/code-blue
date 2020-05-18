import React from 'react'

function EmergencyMedsComponent({addEvent, cprTimer, isPatientArrived}){

    const handleOnClick = (e) =>{
        e.preventDefault();
        let sInputValue = document.getElementById("emergencyMedsGroup").value

        if(sInputValue === "0") return
        if(!isPatientArrived)   return

        switch(sInputValue){
            case "amiodarone150Btn":
                addEvent("Administered Medication", "Amiodarone 150mg")
                break
            case "amiodarone300Btn":
                addEvent("Administered Medication", "Amiodarone 300mg")
                break
            case "atropineBtn":
                addEvent("Administered Medication", "Atropine 0.5mg")
                break
            case "bicarbBtn":
                addEvent("Administered Medication", "Sodium Bicarbonate 50mEq")
                break
            case "caClBtn":
                addEvent("Administered Medication", "Calcium Chloride 1g")
                break
            case "d50Btn":
                addEvent("Administered Medication", "Dextrose 50% 25g")
                break
            case "epiBtn":
                addEvent("Administered Medication", "Epinephirine 1mg")
                break
            case "lidoBtn":
                addEvent("Administered Medication", "Lidocaine 100mg")
                break
            case "magSulBtn":
                addEvent("Administered Medication", "Magnesium Sulfate 1g")
                break
            case "narcanBtn":
                addEvent("Administered Medication", "Narcan 1mg")
                break
            default:
                break
        }

        document.getElementById("emergencyMedsGroup").value = 0
    }

    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Emergency Medications</h5>
            </div>

            <div className="card-body">
                <div>
                    <div className="input-group border-dark rounded">
                        <select className="custom-select" id="emergencyMedsGroup">
                            <option value="0">Emergency Medications</option>
                            <option value="amiodarone150Btn">Amiodarone 150mg</option>
                            <option value="amiodarone300Btn">Amiodarone 300mg</option>
                            <option value="atropineBtn">Atropine 0.5mg</option>
                            <option value="caClBtn">Calcium Chloride 1g</option>
                            <option value="d50Btn">Dextrose 50% 25g</option>
                            <option value="epiBtn">Epinepherine 1mg</option>
                            <option value="lidoBtn">Lidocaine 100mg</option>
                            <option value="magSulBtn">Magnesium Sulfate 1g</option>
                            <option value="narcanBtn">Narcan 1mg</option>
                            <option value="bicarbBtn">Sodium Bicarbonate 50mEq</option>
                        </select>
                        <div className="input-group-append">
                            <button 
                                className="text-Primary btn btn-outline-primary btn-background" 
                                for="emergencyMedsGroup" 
                                onClick={handleOnClick}>Administer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmergencyMedsComponent;