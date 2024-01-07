import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
<nav className='h-12 w-full flex  items-center justify-between  text-lg font-sans font-semibold  px-6 fixed bg-white  '>

<div className="logoname w-80  flex  items-center justify-evenly">
<h1 className='text-2xl fontfamily'>Pinnacle  Management</h1>
<img src="https://tourduvalat.org/wp-content/uploads/2017/11/results-icon-about.png" alt="" className='h-10 w-12' />
</div>

<ul >
<NavLink style={(e)=>{
  return{
    color: e.isActive ? "rgb(3 105 161)" : "",
    fontWeight: e.isActive ? "bold" : "",
  }
}}  className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/" >Home</NavLink>

<NavLink  style={(e)=>{
  return{
    color: e.isActive ? "rgb(3 105 161)" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/About">About</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "rgb(3 105 161)" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Services">Services</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "rgb(3 105 161)" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Create">Add Products</NavLink>

<NavLink style={(e)=>{
  return{
    color: e.isActive ? "rgb(3 105 161)" : "",
    fontWeight: e.isActive ? "bold" : ""
  }
}} className=" ml-8 hover:border-b-2 hover:border-black hover:border-solid" to="/Show">Products List</NavLink>

</ul>



</nav>
  )
}

export default Nav