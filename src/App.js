import React from 'react';
import {Routes, Route} from "react-router-dom"

import Header from './Components/Header';
import Footer from './Components/Footer'
import Router from './Components/Router';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}
export default App;
