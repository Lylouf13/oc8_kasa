import './App.css';
import './Assets/sass/resetter.scss'
import {Routes, Route} from "react-router-dom"

// FA
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

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
