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
    <div>

<ul>
  {allProducts.length >0
  ? allProducts
  .map((p, index)=>{
   return(
    <h4 key={index}>
      {p.product}, {p.companyName}

      <div className="links">

        <Link to={`/Show/Details/${p.product},
        ${p.size},
        ${p.quantity},
        ${p.stock},
        ${p.companyName}`
    }>Details </Link>

      <span onClick={()=> deleteProducts(index) }>
        <i className="ri-delete-bin-line" ></i>
        </span>

      <Link to={`/Show/Edit/${index}`}>
        <i className="ri-file-edit-line"></i>
        </Link>
      </div>
    </h4>
   )
  })
:"No Products are Available"}
</ul>



    </div>
  )
}

export default Show