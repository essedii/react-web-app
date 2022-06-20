import React from "react";
// import { Outlet, Link } from "react-router-dom";
import { Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about-us" element={<AboutUs />}/>
    </Routes>
  );
}

export default App;
