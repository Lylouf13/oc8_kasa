import React from 'react'
import {Routes, Route} from "react-router-dom"


import Home from './Home/Home.js';
import FicheLogement from './Fiche-Logement/FicheLogement';
import Error from './Error/Error.js';
import APropos from './APropos/APropos.js';

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche-Logement" element={<FicheLogement />} />
        <Route path="/404" element={<Error />} />
        <Route path="/A-Propos" element={<APropos />} />
    </Routes>
  )
}
