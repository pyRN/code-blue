import React from 'react'

function LogComponent({eventLog}){
    return ( 
        <div className="m-5">
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Event</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    eventLog && eventLog.length ? 
                        
                    eventLog.reverse().map((events) => (
                        <tr key={events.eventIndex}>
                            <td>{events.eventTimestamp}</td>
                            <td>{events.eventType}</td>
                            <td>{events.eventDescription}</td>
                        </tr>
                    ))
                    :
                    null
                }
                </tbody>
            </table>
        </div>
    );
}

export default LogComponent;