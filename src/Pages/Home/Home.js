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
        text="Chez vous, partout et ailleurs"/>

      <div className='locations'>
        <div className='locations__cards'>
          {locations.map((location, index)=>
            <Card id={index} key={location.id+location} title={location.title} thumbnail={location.pictures[0]}/>
            )
          }
        </div>
      </div>
    </main>
  )
}
