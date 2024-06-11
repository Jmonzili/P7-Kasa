// import React from 'react'
import ApartmentCard from './ApartmentCard'
import './ApartmentGrid.scss'

function ApartmentGrid() {
  return (
    <div className='grid'>
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
      <ApartmentCard />
    </div>
  )
}

export default ApartmentGrid