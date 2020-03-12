import React, { Component } from 'react';   

class DefibrillateComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Defibrillate</h5>
                </div>
                <div className="card-body">
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
                            <button className="text-Primary bg-dark btn btn-outline-primary btn-block" for="joulesGroup">Shock</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefibrillateComponent;