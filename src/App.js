import React from "react";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;