import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    
    <footer className='h-1/2 w-full bg-white '>

        <div className="boxes flex items-center justify-around h-48 w-full ">


        <div className="box1 h-40 w-44   px-2">
            <h1 className='font-bold text-xl'>Useful Links</h1>

            <h3 className='mt-1 hover:text-blue-800 hover:font-bold'><Link to="/About">About</Link></h3>
            <h3 className='mt-1 hover:text-blue-800 hover:font-bold'><Link to="/Services">Services</Link></h3>
            <h3 className='mt-1 hover:text-blue-800 hover:font-bold'><Link to="/Add Products">Add Products</Link></h3>
            <h3 className='mt-1 hover:text-blue-800 hover:font-bold'><Link to="/Products List">Products Lists</Link></h3>


        </div>

        <div className="box2 h-40 w-60  px-2">

            <h1 className='font-bold text-xl text-center'>NEWSLETTER</h1>
            <input type="email" placeholder='Type Email Address' className='h-10 w-52 mt-2 rounded px-2 bg-gray-300 placeholder:text-black' />
            <button className='mt-4 ml-7 h-10 w-36 bg-black text-white rounded-full'>Subscribe Now</button>
        </div>


        <div className="box3 h-44 w-52  px-2">

<h1 className='font-bold text-xl'>CONTACT</h1>
<p className='text-xl'>123, xyz Road,  BSK 3 <br /> Bangalore, Karnataka, IN</p>

<div className="icons h-8 w-full  mt-2 flex items-center justify-around">
<h5 className='text-xl font-bold'><i class="ri-facebook-line"></i></h5>
<h5 className='text-xl font-bold'><i class="ri-twitter-x-line"></i></h5>
<h5 className='text-xl font-bold'><i class="ri-instagram-line"></i></h5>
<h5 className='text-xl font-bold'><i class="ri-whatsapp-line"></i></h5>

</div>
        </div>

        </div>

     
 <div className="copyright h-11 w-full bg-black mt-11 text-white text-center">
            
            <h2 className='pt-2 text-xl'>copyrightReserved©2024, Pinnacle Management
 </h2>
        </div>


    </footer>
    
    
    
    
    
    </>
  )
}

export default Footer