import { useEffect, useState } from "react";

function UseEffect2(){
    const[counter, setcounter]=useState(1)
    useEffect(()=>{
        alert("WELCOME")
    },[])


    return(
        <div>
            <h1>Useeffect empty dependencies</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>setcounter(counter + 1)}>+</button>
        </div>
    )
}


export default UseEffect2