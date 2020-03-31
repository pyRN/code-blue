import React, { useState, useEffect } from 'react'

const ClockComponent = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-GB'))

    useEffect(() => {
        //Handle updating clock element
        const interval = setInterval(() => {
            setCurrentTime(() => new Date().toLocaleTimeString('en-GB'));
        }, 1000);
    }, []);

    return (
        <h2>{currentTime}</h2>
    );
}

export default ClockComponent;