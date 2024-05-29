import { useEffect, useState } from "react";

function UseEffect(){
    const[counter,setcounter]=useState(1)
    const[counter2,setcounter2]=useState(1)

useEffect(()=>{alert("inside function")
console.log("inside function")})




    return(
        <div>
            <h1>UseEffect no dependency </h1>
            <h2>counter1: {counter}</h2>
            <button onClick={()=>setcounter(counter+1)}>+</button>

            <h2>counter2: {counter2}</h2>
            <button onClick={()=>setcounter2(counter2+1)}>+</button>
        </div>
    )

}

export default UseEffect;