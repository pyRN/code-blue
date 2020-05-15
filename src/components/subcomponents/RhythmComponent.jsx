import React from 'react';   

function RhythmComponent(){
    return ( 
        <div className="col-sm">
            <div className="input-group border-dark rounded mb-2">
                <select className="custom-select" id="rhythmGroup">
                    <option selected>Heart Rhythm</option>
                    <option value="1">Asystole</option>
                    <option value="2">A-Fib</option>
                    <option value="3">A-Flutter</option>
                    <option value="4">Complete Heart Block</option>
                    <option value="5">Mono V-Tach</option>
                    <option value="6">PEA</option>
                    <option value="7">Poly V-Tach</option>
                    <option value="8">Pulseless V-Tach</option>
                    <option value="9">SVT</option>
                    <option value="10">Torsades</option>
                    <option value="11">V-Fib</option>
                    <option value="12">1st&#176; AV Block</option>
                    <option value="13">2nd&#176; AV Block Type-1</option>
                    <option value="14">2nd&#176; AV Block Type-2</option>
                </select>
                <div className="input-group-append">
                    <button className="text-light btn btn-danger start-stop-btn-hover" for="rhythmGroup">Add</button>
                </div>
            </div>
        </div>
    );
}

export default RhythmComponent;