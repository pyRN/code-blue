import React, { useState, useEffect } from 'react'

const TimerComponent = ({ timerStatus }) => {
    const [hours, setHours] = useState(0)
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

            if(minutes >= 60){
                setMinutes(prevMinutes => 0)
                setHours(prevHours => prevHours + 1)
            }
        }
    })

    return (
        <h2>{hours}h:{minutes}m:{seconds}s</h2>
    );
}

export default TimerComponent;