import React from 'react';   

function DefibrillateComponent(){
    return ( 
        <div className="col-sm">
            <div className="input-group border-dark rounded mb-2">
                <select className="custom-select" id="joulesGroup">
                    <option selected>Joules</option>
                    <option value="1">1-10</option>
                    <option value="2">15</option>
                    <option value="3">20</option>
                    <option value="4">30</option>
                    <option value="5">50</option>
                    <option value="6">70</option>
                    <option value="7">100</option>
                    <option value="8">120</option>
                    <option value="9">150</option>
                    <option value="10">170</option>
                    <option value="11">200</option>
                </select>
                <div className="input-group-append">
                    <button className="text-danger btn btn-warning warning-btn-hover" for="joulesGroup">Shock</button>
                </div>
            </div>
        </div>
    );
}

export default DefibrillateComponent;