import React, { Component } from 'react'

class LogComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="m-5">
                <table className="table table-dark table-striped">
                        <tbody>
                            <tr>
                                <td>Bob Franks</td>
                                <td>MD</td>
                                <td>ER</td>
                                <td>Arrived</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Sally Jones</td>
                                <td>RN</td>
                                <td>ER</td>
                                <td>Arrived</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Chuck Berry</td>
                                <td>RT</td>
                                <td>ER</td>
                                <td>Arrived</td>
                                <td>1700</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default LogComponent;