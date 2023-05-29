import React from "react";

import { useState, useEffect } from "react";

const Counter = () => {
    
    let [counter, setCounter] = useState(0);

    useEffect(() => {
      const intervalCount = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);

      return () => {clearInterval(intervalCount)};
      
    }, []);

    return (
        <h4>Excuses counter: <strong>{counter}</strong></h4>
    )
}

export default Counter;