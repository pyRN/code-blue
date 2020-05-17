import React from 'react';   

function RhythmComponent({addEvent}){
    const handleOnClick = (e) =>{
        e.preventDefault();
        let sInputValue = document.getElementById("rhythmGroup").value

        if(sInputValue === "0") return
        
        addEvent('Heart Rhythm', `Current heart rhythm: ${sInputValue}`)
        document.getElementById("rhythmGroup").value = 0
    }

    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Pulse Check</h5>
            </div>
            <div className="card-body">
                <div className="col-sm">
                    <div className="input-group border-dark rounded">
                        <select className="custom-select" id="rhythmGroup">
                            <option value="0">Pulse Check</option>
                            <option value="Asystole">Asystole</option>
                            <option value="A-Fib">A-Fib</option>
                            <option value="Flutter">A-Flutter</option>
                            <option value="Complete Heart Block">Complete Heart Block</option>
                            <option value="Mono V-Tach">Mono V-Tach</option>
                            <option value="PEA">PEA</option>
                            <option value="Poly V-Tach">Poly V-Tach</option>
                            <option value="Pulseless V-Tach">Pulseless V-Tach</option>
                            <option value="SVT">SVT</option>
                            <option value="Torsades">Torsades</option>
                            <option value="V-Fib">V-Fib</option>
                            <option value="1st&#176; AV Block">1st&#176; AV Block</option>
                            <option value="2nd&#176; AV Block Type-1">2nd&#176; AV Block Type-1</option>
                            <option value="2nd&#176; AV Block Type-2">2nd&#176; AV Block Type-2</option>
                        </select>
                        <div className="input-group-append">
                            <button className="text-light btn btn-primary start-stop-btn-hover" for="rhythmGroup" onClick={handleOnClick}>Pulse Check</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RhythmComponent;