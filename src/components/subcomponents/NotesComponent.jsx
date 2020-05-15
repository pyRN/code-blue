import React from 'react'

function NotesComponent({addEvent}){

    const handleAddNote = event => {
        event.preventDefault();
        let sInputValue = document.getElementById("notesInput").value

        if(!sInputValue) return
        
        addEvent('Ad Hoc Note', sInputValue)
        document.getElementById("notesInput").value = ''
    }

    return ( 
        <div>
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Notes</h5>
            </div>
            <div className="card-body">
                <div>
                    <div className="input-group mb-3">
                        <input type="text" id="notesInput" className="form-control" placeholder="Ad Hoc Note"></input>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover" onClick={handleAddNote}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotesComponent;