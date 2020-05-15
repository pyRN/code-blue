import React from 'react';   

function RhythmComponent({addEvent}){
    function handleAddNote(e){
        e.preventDefault();
        let sInputValue = document.getElementById("rhythmGroup").value

        if(sInputValue === "0") return
        
        addEvent('Heart Rhythm', sInputValue)
        document.getElementById("rhythmGroup").value = 0
    }

    return ( 
        <div>
            <div className="input-group border-dark rounded">
                <select className="custom-select" id="rhythmGroup">
                    <option selected value="0">Heart Rhythm</option>
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
                    <button className="text-light btn btn-danger start-stop-btn-hover" for="rhythmGroup" onClick={handleAddNote}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default RhythmComponent;