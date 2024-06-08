// import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img src="logo.png" alt="Logo" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  )
}

export default NavBar