import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import './locations.scss'

import Caroussel from '../../Components/Caroussel'
import Collapse from '../../Components/Collapse'
import Rating from '../../Components/Rating'
import Tags from '../../Components/Tags'

import locations from '../../Assets/locations.json'

export default function FicheLogement() {
  const {locationId} = useParams()
  const location =(locations[locationId])

  return (

    <main>
      {location === undefined ? (
      <Navigate to="/*" replace={true}/>
      ) : (
        <section className="location">
          <Caroussel images={location.pictures}/>
          <div className="location__overview">
            <div className='location__overview__main'>
              <h2 className='location__overview__main__title'>{location.title}</h2>
              <p className='location__overview__main__subtitle'>{location.location}</p>
              <div className="location__overview__main__tags">
                {location.tags.map((elements)=>
                  <Tags key={elements.id+elements}title={elements}/>
                  )
                }
              </div>
            </div>
            <div className='location__overview__side'>
                <div className='location__overview__side__host'>
                  <p className='location__overview__side__host__name'>{location.host.name.replace(" ", "\n")}</p>
                  <img className='location__overview__side__host__picture' src={location.host.picture} alt={`Profil du propriétaire, ${location.host.name}`}/>
                </div>
                <div className="location__overview__side__rates">
                  <Rating rate={location.rating}/>
                </div>
            </div>
          </div>
          <div className="location__collapses">
              <Collapse title="Description" elements={location.description} />
              <Collapse title="Equipements" elements={location.equipments}/>
          </div>
        </section>
      )
      }
    </main>
  )
}



