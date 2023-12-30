import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
<nav>

<NavLink to="/">Home</NavLink>
<NavLink to="/About">About</NavLink>
<NavLink to="/Services">Services</NavLink>
<NavLink to="/Create">Add Products</NavLink>
<NavLink to="/Show">Products List</NavLink>


</nav>
  )
}

export default Nav