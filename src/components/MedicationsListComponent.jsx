import React, { Component } from 'react'

class MedicationsListComponent extends Component {
    state = { 
        medications: [
            "Amiodarone",
            "Atropine",
            "Dextrose",
            "Diltiazem",
            "Epinepherine",
            "Lactated Ringer Solution",
            "Sodium Bicarbonate"
        ]
    }
    render() { 
        return (  
            <div className="m-5">
                <div class="input-group mb-3">
                    <input type="text" className="form-control border-primary" placeholder="Search Medications" aria-label="Search Procedures"/>
                    <div class="input-group-append">
                        <button className="text-primary btn btn-background btn-background-hover" id="basic-addon2">Search</button>
                    </div>
                </div>
                <table className="table table-dark table-striped">
                    <tbody>
                        {this.state.medications.map((item) =>
                            <tr>
                                <td>{item}</td>
                            </tr>
                        )} 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MedicationsListComponent;