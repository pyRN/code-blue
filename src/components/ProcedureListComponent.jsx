import React, { Component } from 'react'

class ProcedureListComponent extends Component {
    state = { 
        procedures: [
            "Arterial Line",
            "Central Line",
            "Chest Tube",
            "EKG",
            "Intubation", 
            "I.V. Access",
            "X-Ray"
        ]
    }
    render() { 
        return (  
            <div className="m-5">
                <div class="input-group mb-3">
                    <input type="text" className="form-control border-primary" placeholder="Search Procedures" aria-label="Search Procedures"/>
                    <div class="input-group-append">
                        <button className="text-primary btn btn-background btn-background-hover" id="basic-addon2">Search</button>
                    </div>
                </div>
                <table className="table table-dark table-striped">
                    <tbody>
                        {this.state.procedures.map((item) =>
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
 
export default ProcedureListComponent;