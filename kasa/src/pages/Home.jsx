// import React from 'react'
import ApartmentGrid from '../components/Home/ApartmentGrid'
import Banner from '../components/Home/Banner'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Banner />
      <ApartmentGrid />
    </div>
  )
}

export default Home