// import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className='header_nav'>
        <p>Accueil</p>
        <p>A propos</p>
      </nav>
    </div>
  )
}

export default Header