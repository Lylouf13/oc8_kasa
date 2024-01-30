import React from 'react'
import { useState } from 'react'
import '../Assets/sass/collapse.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Collapse(content) {
  
  const [open, setOpen] = useState(false)

  function handleClick(){
    setOpen(!open)
  }
  
  return (
    <div className='collapse'>
        <p className='collapse__title' onClick={(handleClick)}>{content.title}
          <FontAwesomeIcon className={'collapse__icon' + ' ' + (open ? '' : 'collapse__icon-closed' )}icon={faChevronDown}/>
        </p>
        <div className={'collapse__container' + ' ' + (open ? '' : 'collapse__container-closed' )}>
          {Array.isArray(content.elements) ? 
            content.elements.map((element, index) => 
              <p className='collapse__container__elements' key={`${element}-${index}`}>{element}</p>
              )
              :
              <p className='collapse__container__elements' key={content.elements}>{content.elements}</p>
          }
        </div>
    </div>
  )
}
