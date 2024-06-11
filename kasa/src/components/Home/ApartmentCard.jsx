// import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentCard.scss'

function ApartmentCard() {
  return (
    <Link to="flat" className='apartment'>
      <div className='apartment_title'>
        Titre de la location
      </div>
    </Link>
  )
}

export default ApartmentCard