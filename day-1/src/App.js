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

import UseEffect3 from "./Components/29-5UseEffect3";
import UseEffectN from "./practicereactcomponent/practiceUseEffect";

import UseNavigate from "./30-5/navigate";
import UserDetails from "./30-5/userdetail";
import Mapping from "./02-6/Maping";
import Allproducts from "./02-6/allproducts";

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
        <Route path="/use-state" element={<UseState />}></Route>

        <Route path="/use-state2" element={<UseState2 />}></Route>
        <Route path="/use-effect1" element={<UseEffect1 />}></Route>
        <Route path="/use-effect2" element={<UseEffect2 />}></Route>
        <Route path="/use-effect3" element={<UseEffect3 />}></Route>

        <Route path="/use-effectN" element={<UseEffectN />}></Route>

        <Route path="/use-navigate" element={<UseNavigate />}></Route>
        <Route path="/user/:username" element={<UserDetails />}></Route>

        <Route path="/mapping" element={<Mapping students={["virat", "rohit", "rahul"]} />}/>
        
        <Route path="all-products" element={<Allproducts/>}/>
      </Routes>
    </div>
  );
}
export default App;
