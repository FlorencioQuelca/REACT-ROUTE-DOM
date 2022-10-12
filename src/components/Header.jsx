import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
    <nav>
        <ul>
            <li> <NavLink className={({isActive})=> isActive ? "link-active" : ''} to='/'>Home</NavLink></li>
            <li> <NavLink className={({isActive})=> isActive ? "link-active" : ''} to='/About'>About</NavLink></li>
            <li> <NavLink className={({isActive})=> isActive ? "link-active" : ''} to='/Proyects' >Proyects</NavLink></li>
            
            
        </ul>
    </nav>
  </header>
  )
}

export default Header