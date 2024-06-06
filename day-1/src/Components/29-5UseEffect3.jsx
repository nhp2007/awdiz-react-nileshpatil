import React, { useEffect, useState } from "react";

function UseEffect3() {
    const [counter, setCounter] = useState(1);
    const [counterAlert, setCounterAlert] = useState("");

    useEffect(() => {
        setCounterAlert(
            counter > 10 && counter < 20 ? "Counter is in between 10-20" : "Counter is out of range"
        );
        // Display an alert with the same message as counterAlert
        alert(counterAlert);
    }, [counter, counterAlert]);

    return (
        <div>
            {counterAlert && <p>{counterAlert}</p>}
            <h2>Counter 1: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}

export default UseEffect3;
