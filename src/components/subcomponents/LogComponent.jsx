import React, { Component } from 'react'

class LogComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-lg card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Log</h5>
                </div>
                <div className="card-body">
                    <table className="table table-dark table-striped">
                        <tbody>
                            <tr>
                                <td>Bob Franks MD - ER - Arrived</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Sally Jones RN - ER - Arrived</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Chuck Berry RT - ER - Arrived</td>
                                <td>1700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        );
    }
}

export default LogComponent;