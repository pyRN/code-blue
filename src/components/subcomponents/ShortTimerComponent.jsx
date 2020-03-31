import React, { useState, useEffect } from 'react'

const ShortTimerComponent = ({ timerStatus }) => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect( () => {
        let interval
        if(timerStatus){
            interval = setInterval(() => 
                setSeconds(prevSeconds => prevSeconds + 1)
            , 1000);
        }
        return () => clearInterval(interval);
    }, [timerStatus])

    useEffect( () =>{
        if(seconds >= 60){
            setSeconds(prevSeconds => 0)
            setMinutes(prevMinutes => prevMinutes + 1)
        }
    })

    return (
        <h2>{minutes}m:{seconds}s</h2>
    );
}

export default ShortTimerComponent;