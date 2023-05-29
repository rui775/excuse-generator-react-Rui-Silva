import React from "react";
import { useState, useEffect } from "react";


const ExcuseGenerator = () => {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying",
    ];

    let [excuse, setExcuse] = useState("Sorry, but...");

    useEffect(() => {setInterval(() => {
        setExcuse(
          who[Math.floor(Math.random() * who.length)] +
          " " +
          action[Math.floor(Math.random() * action.length)] +
          " " +
          what[Math.floor(Math.random() * what.length)] +
          " " +
          when[Math.floor(Math.random() * when.length)]
        );
      }, 120000);

    }, []);

    // let [counter, setCounter] = useState(0);

    // useEffect(() => {
    //   const intervalCount = setInterval(() => {
    //     setCounter((counter) => counter + 1);
    //   }, 120000);

    //   return () => {clearInterval(intervalCount)};
      
    // }, []);

    return (
      <div>
        <h3 class="shadow p-3 mb-5 bg-body-tertiary rounded"><strong>{excuse}</strong></h3>
        {/* <h4>Excuses counter: {counter} </h4> */}
      </div>
    )
  };

export default ExcuseGenerator;