import React from 'react'
import '../Assets/sass/footer.scss'
import kVector from '../Assets/Images/kVector.svg'
import aVector from '../Assets/Images/aVector.svg'
import sVector from '../Assets/Images/sVector.svg'
import houseVector from '../Assets/Images/houseLogo.svg'


export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__logo'>
            <img src={kVector}/>
            <img src={houseVector}/>
            <img src={sVector}/>
            <img src={aVector}/>
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
