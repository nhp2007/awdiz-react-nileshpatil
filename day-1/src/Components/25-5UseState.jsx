import { useState } from "react";


function UseState(){
    const[counter , setCounter]=useState(1)
    const[counter2 , setCounter2]=useState(10)


function increment (){
    console.log("inside")
    setCounter(counter+1)
}

function decrement (){
    console.log("inside")
    if(counter>1)
    setCounter(counter-1)
}

function reset (){
    setCounter(1)
}

function increment2 (){
    console.log("inside")
    if(counter===10)
    setCounter2((prevValue)=>prevValue+1)
}

function decrement2 (){
    console.log("inside")
    if(counter2>10)
    setCounter2((prevValue)=>prevValue-1)
}

function reset2 (){
    setCounter2(10)
}




    return(
        <div>
            <h1>counter1: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>RESET</button>
            
            <h1>counter2: {counter2}</h1>
            <button onClick={increment2}>+</button>
            <button onClick={decrement2}>-</button>
            <button onClick={reset2}>RESET</button>

            

        </div>
    )
}

export default UseState

