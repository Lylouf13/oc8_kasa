import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/sass/navbar.scss'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link className={'navbar__link'} to="/">Accueil</Link>
        <Link className='navbar__link' to="/About">A Propos</Link>
    </nav>
  )
}
