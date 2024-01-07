import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
const Show = () => {

  const [allProducts, setallProducts] = useContext(ProductContext)


  const deleteProducts = (index)=>{
    const deleteproductsData = [...allProducts]
    deleteproductsData.splice(index, 1)
    setallProducts(deleteproductsData)
    localStorage.setItem("Productslist", JSON.stringify(deleteproductsData))
  }
  return (

    <div className="maindiv h-screen w-full">

<div className='h-full w-full bg-slate-100 borderr-t '>



<ul className=' border-t pt-14 '>
  {allProducts.length > 0
  ? allProducts
  .map((p, index)=>{
   return(
  
    <h4 key={index} className='h-10 w-full border-black border-b  mt-5  flex items-center justify-between px-10 overflow-y-auto'>

 <li className='flex items-center'><span className='text-xl font-semibold'>Product Name:</span> <h3 className='ml-3 text-xl '>{p.product}</h3> 
 <span className='text-xl font-semibold ml-28'>Company Name:</span> <h3 className='ml-3 text-xl'>{p.companyName}</h3> </li>


<div className="links w-36 flex justify-evenly">

<Link to={`/Show/Details/${p.number}`} className='text-xl text-sky-900 font-bold'>Details</Link>

<span onClick={()=> deleteProducts(index) }>
<i className="ri-delete-bin-line text-xl font-bold" ></i>
</span>

<Link to={`/Show/Edit/${p.number}`}>
<i className="ri-file-edit-line text-xl font-bold"></i>
</Link>
</div>




    </h4>

    
   )
  })
:"No Products are Available"}
</ul>



    </div>


      {/* maindivend */}
    </div>



  
  )
}

export default Show
