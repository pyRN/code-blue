import React, { Component } from 'react'

class TeamListComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="m-5">
                <div>
                    <h2>Team Members</h2>
                    <input placeholder="Team Member"></input>
                    <input placeholder="Title"></input>
                    <input placeholder="Department"></input>
                    <input placeholder="Arrived" type="time"></input>
                    <button>Add</button>
                </div>
                <div>
                    <table className="table-dark table-striped">
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