import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate } from 'react-router-dom'

const Create = () => {
const [allProducts, setallProducts] = useContext(ProductContext)
const navigate = useNavigate()
const [number, setnumber] = useState("")
const [product, setproduct] = useState("")
const [size, setsize] = useState("")
const [quantity, setquantity] = useState("")
const [stock, setstock] = useState("")
const [companyName, setcompanyName] = useState("")

const submithandler = (event)=>{
event.preventDefault()

const productsData = { number, product, size, quantity, stock, companyName}

const Copyproducts = [...allProducts]
Copyproducts.push(productsData)
setallProducts(Copyproducts )
localStorage.setItem("Productslist", JSON.stringify(Copyproducts ))

setnumber("")
setproduct("")
setsize("")
setquantity("")
setstock("")
setcompanyName("")
navigate("/Show")



}

  return (

    <>
    <div className=' h-screen w-full  pt-16'>

<h1 className='text-4xl mt-3 text-sky-900 fontfamily text-center'>ADD YOUR PRODUCTS..</h1>

<div className="formbox h-5/6 w-full  flex mt-4">

  <div className="formbox-left h-full w-1/2 bg-yellow-300 bg-[url(https://img.freepik.com/premium-vector/woman-filling-form_118813-1017.jpg)] bg-cover bg-center"></div>

  <div className="formbox-right h-full w-1/2 ">


  <form onSubmit={submithandler} className='flex flex-col justify-center items-center py-1' >

<input  type="number"  
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setnumber(e.target.value) } 
value={number}
name="number" 
placeholder='S.No:'/>

<input  type="text" 
className='mt-5 h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setproduct(e.target.value) } 
value={product}
name="product" 
placeholder='Product Name:' /> 

<input type="text" 
className='h-10 w-96 px-2 mt-5 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setsize(e.target.value) }
value={size}
name="size" 
placeholder='Size:'/> 

<input type="text" 
className='h-10 w-96 px-2 mt-5 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setquantity(e.target.value) } 
value={quantity}
name="quantity" 
placeholder='Quantity:' /> 

<input type="text"  
className='h-10 w-96 px-2 mt-5 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setstock(e.target.value) }
value={stock}
name="stock" 
placeholder='Stock:'/> 

<input type="text"  
className='h-10 w-96 px-2 mt-5 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold'
onChange={(e)=> setcompanyName(e.target.value) }
value={companyName}
name="companyName" 
placeholder='Company Name:' /> 

<button className='h-10 w-24 bg-sky-900 text-white rounded mt-5'>Submit</button>



        </form>


  </div>



  {/* formboxend */}
</div>



    </div>
    
    
    
    
    
    </>
  )
}

export default Create