import React, { Component } from 'react'

class NotesComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
                <div className="card-header bg-secondary">
                    <h5 className="m-auto">Notes</h5>
                </div>
                <div className="card-body">
                    <div className="input-group border-dark rounded mb-2">
                        <input type="text" className="form-control border-primary"></input>
                        <div className="input-group-append">
                            <button className="text-Primary bg-dark btn btn-outline-primary btn-block">Add </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesComponent;