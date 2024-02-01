import React from 'react'

import '../Assets/sass/banner.scss'

export default function Banner(content) {
  return (
    <div className='banner'>
        <img className='banner__img' src={content.image} alt={content.alt}/>
        <h3 className='banner__title'>{content.text}</h3>
    </div>
  )
}
