import React, { useState } from 'react'

const LogComponent = ({eventLog}) => {
    const [events, setEventLog] = useState(eventLog)

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
                    {events.map((events) => (
                        <tr key={events.eventIndex}>
                            <td>{events.eventTimestamp}</td>
                            <td>{events.eventType}</td>
                            <td>{events.eventDescription}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LogComponent;