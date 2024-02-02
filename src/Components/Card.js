import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/sass/card.scss'

export default function Card(location) {
  return (
    <Link className='card'to={`/Locations/${location.id}`}>
      <p className='card__title'>{location.title}</p>
      <img className='card__image' src={location.thumbnail} alt={`Photographie de présentation du domicile '${location.title}'`}/>
    </Link>
  )
}
