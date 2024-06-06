import { useNavigate } from "react-router-dom";

function UseNavigate (){
    const router = useNavigate();

    return(
        <div>
        <h1>Testing usenavigate</h1>
        <button onClick={()=>router("/")}>Go to homepage</button>
        </div>
    )
}

export default UseNavigate