import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
const [allProducts, setallProducts] = useContext(ProductContext)

const navigate = useNavigate()
const {index} = useParams()
 const productsIndex = allProducts.findIndex((p)=> p.index == index)

const [editProductsData, seteditProductsData] = useState({
    
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

const productsData = {product: editProductsData.product, size: editProductsData.size, quantity: editProductsData.quantity, stock: editProductsData.stock, companyName: editProductsData.companyName}

const Copyproducts = [...allProducts]
Copyproducts[ productsIndex] = productsData
setallProducts(Copyproducts )
localStorage.setItem("Productslist", JSON.stringify(Copyproducts ))


navigate("/Details")

};

  return (

    <>
    <div>
        <form onSubmit={submithandler} >

<input  type="text"
onChange={editHandler } 
value={editProductsData.product}
name="product" 
placeholder='ProductName' /> <br /> <br />

<input type="text" 
onChange={editHandler }
value={ editProductsData.size}
name="size" 
placeholder='Size'/> <br /> <br />

<input type="text"
onChange={ editHandler} 
value={editProductsData.quantity}
name="quantity" 
placeholder='Quantity' /> <br /> <br /> 

<input type="text" 
onChange={ editHandler }
value={editProductsData.stock}
name="stock" 
placeholder='Stock'/> <br /> <br />

<input type="text" 
onChange={editHandler}
value={editProductsData.companyName}
name="companyName" 
placeholder='Company' /> <br /> <br />

<button>Submit</button>




        </form>


    </div>
    
    
    
    
    
    </>
  )
}

export default Edit