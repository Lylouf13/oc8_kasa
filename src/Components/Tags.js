import React from 'react'
import '../Assets/sass/tags.scss'

export default function (content) {
  return (
    <p className='tag'>{content.title}</p>
  )
}
