import React from 'react'

function NotesComponent({addEvent}){

    const handleAddNote = event => {
        event.preventDefault();
        let sInputValue = document.getElementById("notesInput").value

        if(!sInputValue) return
        
        addEvent('ad hoc note', sInputValue)
        document.getElementById("notesInput").value = ''
    }

    return ( 
        <div className="input-group mb-3">
            <input type="text" id="notesInput" className="form-control" placeholder="Ad Hoc Note"></input>
            <div className="input-group-append">
                <button className="text-primary btn btn-background btn-background-hover" onClick={handleAddNote}>Add</button>
            </div>
        </div>
    );
}

export default NotesComponent;