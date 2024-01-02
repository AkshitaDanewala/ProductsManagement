import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
<nav className='h-14 w-full flex  items-center justify-between  text-lg font-sans font-semibold  px-8 '>

<div className="logoname ">
<h1>Pinnacle  Management</h1>

</div>

<ul >
<NavLink style={(e)=>{
  return{
    color: e.isActive ? "red" : "",
    fontWeight: e.isActive ? "bold" : "",
  }
}}  className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/" >Home</NavLink>

<NavLink  style={(e)=>{
  return{
    color: e.isActive ? "red" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/About">About</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "red" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Services">Services</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "red" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Create">Add Products</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "red" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Show">Products List</NavLink>

</ul>



</nav>
  )
}

export default Nav