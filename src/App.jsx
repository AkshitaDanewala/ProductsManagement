import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Create from "./components/Create.jsx"
import Show from "./components/Show.jsx"
import Details from "./components/Details.jsx"
import Edit from "./components/Edit.jsx"
import CustomerReviews from "./components/CustomerReviews.jsx"
import 'remixicon/fonts/remixicon.css'


const App = () => {
  return (
    <>
  <Nav/>
   
   <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Services" element={<Services/>}/>
<Route path="/Create" element={<Create/>}/>
<Route path="/Show" element={<Show/>}/>
<Route path="/Show/Details/:title" element={<Details/>}/>
<Route path="/Show/Edit/:title/" element={<Edit/>}/>
<Route path="/CustomerReviews" element={<CustomerReviews/>}/>

   </Routes>
   

   
    
    
    
    
    
    
    </>
  )
}

export default App