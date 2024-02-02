import React from 'react'
import '../Assets/sass/tags.scss'

export default function Tag(content) {
  return (
    <p className='tag'>{content.title}</p>
  )
}
