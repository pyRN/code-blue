import React from 'react';

function QuickLogComponent({eventLog}){
    return(
        <div className="col-sm card m-1 p-4 border border-dark bg-dark rounded">
            <div className="card-header bg-secondary">
                <h5 className="m-auto">Quick Log</h5>
            </div>
            <div className="card-body">
                <div className="row">
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
                                
                            eventLog.slice(-5).reverse().map((events) => (
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
            </div>
        </div>
    )
}

export default QuickLogComponent