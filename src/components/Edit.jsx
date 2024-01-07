import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {
const [allProducts, setallProducts] = useContext(ProductContext)

const navigate = useNavigate()
const {title} = useParams()
 const productsIndex = allProducts.findIndex((p)=> p.number == title)

const [editProductsData, seteditProductsData] = useState({
  
  number: allProducts[productsIndex].number,
product: allProducts[productsIndex].product,
size:  allProducts[productsIndex].size,
quantity: allProducts[productsIndex].quantity,
stock: allProducts[productsIndex].stock,
companyName: allProducts[productsIndex].companyName
})


const editHandler = (e)=>{
  const  copydata = {...editProductsData}
    copydata[e.target.name] = e.target.value
    seteditProductsData(copydata)
}

const submithandler = (event)=>{
event.preventDefault()

const productsData = { number: editProductsData.number, product: editProductsData.product, size: editProductsData.size, quantity: editProductsData.quantity, stock: editProductsData.stock, companyName: editProductsData.companyName}

const Copyproducts = [...allProducts]
Copyproducts[ productsIndex] = productsData
setallProducts(Copyproducts )
localStorage.setItem("Productslist", JSON.stringify(Copyproducts ))
toast.dark("Products Successfully Edited")

navigate("/Show")
};


  return (

    <>
    <div className=' maindiv h-screen w-full'>


<div className="formbox h-full w-full bg-slate-100 flex flex-col items-center justify-center ">

<h1 className='text-4xl mt-4 text-sky-900 fontfamily text-center'>Edit Your Products..</h1>

<form onSubmit={submithandler}  className='h-96 w-3/6 flex flex-col items-center py-4 mt-5'>

<input  type="number"
 className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 '
onChange={editHandler } 
value={editProductsData.number}
name="number" 
placeholder='S.No' />  



<input  type="text" 
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 mt-3'
onChange={editHandler } 
value={editProductsData.product}
name="product" 
placeholder='Product' /> 


<input type="text" 
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 mt-3'
onChange={editHandler }
value={ editProductsData.size}
name="size" 
placeholder='Size'/> 


<input type="text"
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 mt-3'
onChange={ editHandler} 
value={editProductsData.quantity}
name="quantity" 
placeholder='Quantity' /> 


<input type="text"
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 mt-3' 
onChange={ editHandler }
value={editProductsData.stock}
name="stock" 
placeholder='Stock'/> 


<input type="text" 
className='h-10 w-96 px-2 border-b-2 border-black  bg-inherit placeholder:text-black font-semibold outline-0 mt-3'
onChange={editHandler}
value={editProductsData.companyName}
name="companyName" 
placeholder='Company' /> 


<button className='h-12 w-24 mt-5 bg-sky-900 text-white font-bold rounded-md hover:bg-sky-700'>Submit</button>




</form>

</div>
       






{/* maindivend */}
    </div>
    
    
    
    
    
    </>
  )
}

export default Edit