import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import '../Assets/sass/navbar.scss'

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='navbar'>
        <Link className={`navbar__link ${location.pathname==="/"? "navbar__link-underline" : ""}`} to="/">Accueil</Link>
        <Link className={`navbar__link ${location.pathname==="/About"? "navbar__link-underline" : ""}`} to="/About">A Propos</Link>
    </nav>
  )
}
