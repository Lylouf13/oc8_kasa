import React from 'react'
import './home.scss'

import Banner from '../../Components/Banner';
import Card from '../../Components/Card';
import homeBanner from '../../Assets/Images/homeBanner.jpg'

import locations from '../../Assets/locations.json'



export default function Home() {
  return (
    <main>
      <Banner 
        image={homeBanner}
        alt="Panorama côtier, les vagues s'écrasent sur la côte"
        text="Chez vous, partout et ailleurs"/>

      <div className='locations'>
        <div className='locations__cards'>
          {locations.map((location, index)=>
            <Card id={index} key={`locationLink-${index}`} title={location.title} thumbnail={location.pictures[0]}/>
            )
          }
        </div>
      </div>
    </main>
  )
}
