import { useState } from "react";

function UseState2(){
    const [counter, setCounter]=useState(1)


    function Increment(){
        setCounter(counter + 1)
    }


    function decrement(){
        setCounter(counter - 1)
    }


    return(
        <div>
            <h1>Use State</h1>
            <h2>Counter:{counter}</h2>
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}

export default UseState2