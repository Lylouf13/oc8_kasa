import React from 'react'
import '../Assets/sass/collapse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Collapse(content) {
  let open = false
  
  return (
    <div className='collapse'>
        <p className='collapse__title'>{content.title}</p>
        <FontAwesomeIcon  icon="check-square"/>
        <div className='collapse__container'>
          {content.elements.map((element) => 
              <p className='collapse__container__elements'>{element}</p>
              )}
        </div>
    </div>
  )
}
