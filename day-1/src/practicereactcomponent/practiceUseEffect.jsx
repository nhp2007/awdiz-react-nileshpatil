import React, { useEffect, useState } from "react";

function UseEffectN() {
    const [counter, setCounter] = useState(1);
    const [counterAlert, setCounterAlert] = useState("");

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        // Decrement the counter unless it's already at 0
        setCounter(counter > 0 ? counter - 1 : 0);
    };

    useEffect(() => {
        setCounterAlert(
            counter >= 10 && counter <= 20 ? "Counter is in between 10-20" : "Counter is out of range"
        );
        // alert(counterAlert);
    }, [counter, counterAlert]);

    return (
        <div>
            {counterAlert && <p>{counterAlert}</p>}
            <h2>Counter 1: {counter}</h2>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
        </div>
    );
}

export default UseEffectN;
