import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from './components/Home';
import MouseSpotlight from "./components/MouseSpotlight";
import CoffeeList from "./components/CoffeeList";

export const Layout = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mouse" element={<MouseSpotlight/>}/>
          <Route path="/coffee-list" element={<CoffeeList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


