import React from 'react'

function EmergencyProcComponent({addEvent}){
    const handleOnClick = (e) =>{
        e.preventDefault();
        let sInputValue = document.getElementById("emergencyProcsGroup").value

        if(sInputValue === "0") return

        switch(sInputValue){
            case "artLineProc":
                addEvent("Procedure", "Arterial Line")
                break
            case "centLineProc":
                addEvent("Procedure", "Central Line")
                break
            case "chestTubeProc":
                addEvent("Procedure", "Chest Tube")
                break
            case "intubateProc":
                addEvent("Procedure", "Intubate")
                break
            case "ivProc":
                addEvent("Procedure", "IV Access")
                break
            default:
                break
        }

        document.getElementById("emergencyProcsGroup").value = 0
    }
    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Emergency Procedures</h5>
            </div>
            
            <div className="card-body">
                <div>
                    <div className="input-group border-dark rounded">
                        <select className="custom-select" id="emergencyProcsGroup">
                            <option value="0">Emergency Procedures</option>
                            <option value="artLineProc">Arterial Line</option>
                            <option value="centLineProc">Central Line</option>
                            <option value="chestTubeProc">Chest Tube</option>
                            <option value="intubateProc">Intubate</option>
                            <option value="ivProc">I.V. Access</option>
                        </select>
                        <div className="input-group-append">
                            <button 
                                className="text-Primary btn btn-outline-primary btn-background" 
                                for="emergencyProcsGroup" 
                                onClick={handleOnClick}>Open</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmergencyProcComponent;