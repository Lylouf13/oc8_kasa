import React from 'react'
import '../Assets/sass/rating.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default function Rating(content) {
    return (
    <div className='rating'>
        <FontAwesomeIcon className={'rating__star' + ' ' + (content.rate > 0 ? 'rating__star-red' : '' )} icon={faStar}/>
        <FontAwesomeIcon className={'rating__star' + ' ' + (content.rate > 1 ? 'rating__star-red' : '' )} icon={faStar}/>
        <FontAwesomeIcon className={'rating__star' + ' ' + (content.rate > 2 ? 'rating__star-red' : '' )} icon={faStar}/>
        <FontAwesomeIcon className={'rating__star' + ' ' + (content.rate > 3 ? 'rating__star-red' : '' )} icon={faStar}/>
        <FontAwesomeIcon className={'rating__star' + ' ' + (content.rate > 4 ? 'rating__star-red' : '' )} icon={faStar}/>
    </div>
  )
}
