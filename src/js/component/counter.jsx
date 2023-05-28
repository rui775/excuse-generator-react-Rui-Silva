import React from "react";

import { useState, useEffect } from "react";

const Counter = () => {
    
    let [currentTime, setCurrentTime] = useState(new Date());
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 5000)
    }, [])

    useEffect(() => {
        setCounter(counter+1);
    }, [currentTime])

    return (
        <h3>{counter}</h3>
    )
}

export default Counter;