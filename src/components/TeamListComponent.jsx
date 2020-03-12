import React, { Component } from 'react'

class TeamListComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="m-5">
                <div className="table">
                    <div class="input-group">
                        <input type="text" placeholder="Name" class="form-control"/>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Title</option>
                            <option value="1">MD</option>
                            <option value="2">RN</option>
                            <option value="3">RT</option>
                            <option value="4">Tech</option>
                            <option value="5">EKG</option>
                            <option value="6">Rad Tech</option>
                        </select>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Department</option>
                            <option value="1">ED</option>
                            <option value="2">Surgery</option>
                            <option value="3">Trauma</option>
                            <option value="4">ICU</option>
                            <option value="5">Radiology</option>
                        </select>
                        <input type="time" class="form-control"/>
                    </div>
                </div>
                <div>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Department</th>
                                <th>Arrival</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bob Franks</td>
                                <td>MD</td>
                                <td>ER</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Sally Jones</td>
                                <td>RN</td>
                                <td>ER</td>
                                <td>1700</td>
                            </tr>
                            <tr>
                                <td>Chuck Berry</td>
                                <td>RT</td>
                                <td>ER</td>
                                <td>1700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        );
    }
}

export default TeamListComponent;