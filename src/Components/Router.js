import React from 'react'
import {Routes, Route} from "react-router-dom"


import Home from '../Pages/Home/Home.js';
import Locations from '../Pages/Locations/Locations.js';
import Error from '../Pages/Error/Error.js';
import About from '../Pages/About/About.js';

export default function Router() {
  return (
    <Routes errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path={"/Locations/:locationId"} element={<Locations />} />
        <Route path="*" element={<Error />} />
        <Route path="/About" element={<About />} />
    </Routes>
  )
}
