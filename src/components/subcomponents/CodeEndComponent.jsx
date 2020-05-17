import React from 'react';

function CodeEndComponent({addEvent}){
    const handleOnClick = (e) =>{
        e.preventDefault();
        let sInputValue = document.getElementById("rhythmGroup").value

        if(sInputValue === "0") return
        
        addEvent('Heart Rhythm', `Current heart rhythm: ${sInputValue}`)
        document.getElementById("rhythmGroup").value = 0
    }

    return(
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">End Code</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="roscBtn" onClick={handleOnClick}>R.O.S.C</button>
                    </div>
                    <div className="col-sm">
                        <button className="text-Primary btn btn-outline-primary btn-block m-1 btn-background" id="todBtn" onClick={handleOnClick}>T.O.D</button>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default CodeEndComponent