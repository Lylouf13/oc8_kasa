import React from 'react'
import { useState } from 'react'
import '../Assets/sass/caroussel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Caroussel(content) {
    const [index, setIndex] = useState(0)
    function handleClick(direction){
        if(index === content.images.length-1 && direction > 0){
            setIndex(0)
        }
        else if(index === 0 && direction < 0){
            setIndex(content.images.length-1)
        }
        else{
            setIndex(index + 1*direction)
        }
    }

    return (
    <section className='caroussel'>
        <img className='caroussel__img' src={content.images[index]}/>
        {content.images.length > 1 && <FontAwesomeIcon onClick={()=> handleClick(-1)} className='caroussel__icon caroussel__icon-left' icon={faChevronLeft}/>}
        {content.images.length > 1 && <p className='caroussel__count'>{index+1}/{content.images.length}</p>}
        {content.images.length > 1 && <FontAwesomeIcon onClick={()=> handleClick(1)} className='caroussel__icon caroussel__icon-right' icon={faChevronRight}/>}

    </section>
  )
}
