import React from "react";
// import { Outlet, Link } from "react-router-dom";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div>
     
      <Routes>
        <Route
        path=" "
        element={<App/>}/>
        <Route index element={<Home />} />
      </Routes>
      </div>
      
    </Router>
   
  );
}

export default App;
