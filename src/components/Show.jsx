import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
const Show = () => {

  const [allProducts, setallProducts] = useContext(ProductContext)

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
        <Link to={`/Show/Details/${p.product}, ${p.size}, ${p.quantity}, ${p.stock}, ${p.companyName}`}>Details</Link>

      <span><i className="ri-delete-bin-line"></i></span>
      <span><i className="ri-file-edit-line"></i></span>
      </div>
    </h4>
   )
  })
: "No Products are Available"}
</ul>



    </div>
  )
}

export default Show