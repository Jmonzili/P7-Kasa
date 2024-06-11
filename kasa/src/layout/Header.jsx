// import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <NavLink to="/" className='header_logo'>
        <img src="logo.png" alt="Logo" />
      </NavLink>
      <nav className='header_nav'>
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
          <div>A propos</div>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header