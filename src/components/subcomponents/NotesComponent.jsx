import React from 'react'

const NotesComponent = ({addEvent}) => {

    const handleAddNote = event => {
        event.preventDefault();
        let sInputValue = document.getElementById("notesInput").value
        let currentTime = new Date();

        if(!sInputValue) return

        addEvent({
            eventTimestamp: `${currentTime.getHours()}:${currentTime.getMinutes()
            }:${currentTime.getSeconds()}:${currentTime.getMilliseconds()} - ${currentTime.getMonth() + 1}/${currentTime.getDate()}/${currentTime.getFullYear()}`,
            eventType: "ad hoc note",
            eventDescription: sInputValue
        })

        document.getElementById("notesInput").value = ''
    }


    return ( 
        <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Notes</h5>
            </div>
            <div className="card-body">
                <div className="input-group border-dark rounded mb-2">
                    <form onSubmit={handleAddNote}>
                        <input type="text" id="notesInput" className="form-control border-primary" placeholder="Ad Hoc Note" onSubmit={handleAddNote}></input>
                        <div className="input-group-append">
                            <button className="text-primary btn btn-background btn-background-hover" onClick={handleAddNote}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NotesComponent;