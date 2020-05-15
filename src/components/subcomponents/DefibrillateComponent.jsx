import React from 'react';   

function DefibrillateComponent({addEvent}){
    const handleOnClick = (e) =>{
        e.preventDefault();
        let sInputValue = document.getElementById("joulesGroup").value

        if(sInputValue === "0") return
        
        addEvent('Defibrillate', `Patient defibrillated at ${sInputValue} joules`)
        document.getElementById("joulesGroup").value = 0
    }

    return ( 
        <div className="col-sm">
            <div className="input-group border-dark rounded">
                <select className="custom-select" id="joulesGroup">
                    <option value="0">Joules</option>
                    <option value="1-10">1-10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="70">70</option>
                    <option value="100">100</option>
                    <option value="120">120</option>
                    <option value="150">150</option>
                    <option value="170">170</option>
                    <option value="200">200</option>
                </select>
                <div className="input-group-append">
                    <button className="text-danger btn btn-warning warning-btn-hover" for="joulesGroup" onClick={handleOnClick}>Shock</button>
                </div>
            </div>
        </div>
    );
}

export default DefibrillateComponent;