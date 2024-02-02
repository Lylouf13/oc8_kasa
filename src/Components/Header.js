import React from 'react'
import '../Assets/sass/header.scss'
import logo from '../Assets/Images/logo.svg'
import Navbar from './Navbar'


export default function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Logo Kasa"></img>
        <Navbar/>
    </header>
    )
}
