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
    <div className=' h-screen w-full bg-red-300 pt-16'>


        <form onSubmit={submithandler} className='' >

<input type="number" 
onChange={(e)=> setnumber(e.target.value) } 
value={number}
name="number" 
placeholder='S.No' /> <br /> <br />

<input  type="text"
onChange={(e)=> setproduct(e.target.value) } 
value={product}
name="product" 
placeholder='ProductName' /> <br /> <br />

<input type="text" 
onChange={(e)=> setsize(e.target.value) }
value={size}
name="size" 
placeholder='Size'/> <br /> <br />

<input type="text"
onChange={(e)=> setquantity(e.target.value) } 
value={quantity}
name="quantity" 
placeholder='Quantity' /> <br /> <br /> 

<input type="text" 
onChange={(e)=> setstock(e.target.value) }
value={stock}
name="stock" 
placeholder='Stock'/> <br /> <br />

<input type="text" 
onChange={(e)=> setcompanyName(e.target.value) }
value={companyName}
name="companyName" 
placeholder='Company' /> <br /> <br />

<button>Submit</button>



        </form>


    </div>
    
    
    
    
    
    </>
  )
}

export default Create