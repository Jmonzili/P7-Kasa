// import React from 'react'
import ApartmentGrid from '../components/home/ApartmentGrid'
import Banner from '../components/home/Banner'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <ApartmentGrid />
    </div>
  )
}

export default Home