// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";                               
import Womens from "./Components/Womens";
import Mens from "./Components/Mens";

import NotFound from "./Components/25-5Notfound";
import UseState from "./Components/25-5UseState";

import UseState2 from "./Components/26-5Usestate2";
import UseEffect1 from "./Components/26-5UseEffect-1";
import UseEffect2 from "./Components/26-5UseEffect-2";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Mens" element={<Mens />} />                              
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />}></Route>
        <Route path="use-state" element={<UseState />}></Route>

        <Route path="use-state2" element={<UseState2 />}></Route>
        <Route path="use-effect1" element={<UseEffect1 />}></Route>
        <Route path="use-effect2" element={<UseEffect2 />}></Route>




        
  
      </Routes>
    </div>

    
      
  
  );
}
export default App;
