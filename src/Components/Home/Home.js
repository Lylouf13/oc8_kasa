import React from 'react'
import './home.scss'
import Banner from '../Banner';
import Card from '../Card';
import homeBanner from '../../Assets/Images/homeBanner.jpg'



export default function Home() {
  return (
    <main>
      <Banner 
        image={homeBanner}
        text="Chez vous, partout et ailleurs"/>

      <div className='locations'>
        <div className='locations__cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}
