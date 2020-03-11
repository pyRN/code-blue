import React, { Component } from 'react'

class ProcedureListComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div className="m-5">
                <h2>Procedures</h2>
                <input placeholder="Search"></input>
                <button>Search</button>
                <table className="table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Procedures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Intubation</td>
                        </tr>
                        <tr>
                            <td>I.V. Access</td>
                        </tr>
                        <tr>
                            <td>Central Line Access</td>
                        </tr>
                        <tr>
                            <td>X-Ray</td>
                        </tr>
                        <tr>
                            <td>CT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default ProcedureListComponent;