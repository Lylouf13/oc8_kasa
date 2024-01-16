import React from 'react'
import Banner from '../Banner'
import aboutBanner from '../../Assets/Images/aboutBanner.jpg'
import Collapse from '../Collapse'


export default function APropos() {
  return (
    <main>
      <Banner 
        image={aboutBanner}
        text=""/>

      <Collapse title='Fiabilité'elements=
          {[`Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes`]}/>
      <Collapse title='Respect'elements=
          {[`La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          Comportement discriminatoire ou de perturbation du voisinage entraînera
          une exclusion de notre plateforme`]}/>
      <Collapse title='Service'elements=
          {[`Nous sommes avant tout à votre service, locataire comme hote, vous
          pouvez nous contacter à tout instant, notre service s'occupera de vous`]}/>
      <Collapse title='Sécurité'elements=
          {[`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
          les voyageurs, chaque logement correspond aux critères de sécurtié établis
          par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
          cela permet à nos équipes de vérifier que les standards sont bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes`]}/>
    </main>  
    )
}
