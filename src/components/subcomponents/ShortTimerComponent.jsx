import React, { useState, useEffect } from 'react'

const ShortTimerComponent = ({ timerStatus, resetTimer }) => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect( () => {
        //Reset timer back to 0m:0s
        if(resetTimer){
            setMinutes(0)
            setSeconds(0)
        }
        else{
            let interval
            //Increment timer every second
            if(timerStatus){
                interval = setInterval(() => 
                    setSeconds(prevSeconds => prevSeconds + 1)
                , 1000);
            }
            return () => clearInterval(interval);
        }
    }, [timerStatus, resetTimer])

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