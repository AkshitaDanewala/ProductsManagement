import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
const Details = () => {

  const [allProducts, setallProducts] = useContext(ProductContext)
   const {title} = useParams()
   const productList = allProducts.findIndex((p)=> p.number == title)
    const navigate = useNavigate()

    const backhandler = ()=>{
        navigate(-1)
    }
  return (
    <div>

{/* <h3>{title}</h3> */}

<div className="listbox pt-20">
<h3>Number: {allProducts[productList].number}</h3>
<h3>Product: {allProducts[productList].product}</h3>
<h3>Size: {allProducts[productList].size}</h3>
<h3>Quantity: {allProducts[productList].quantity}</h3>
<h3>Stock: {allProducts[productList].stock}</h3>
<h3>CompanyName: {allProducts[productList].companyName}</h3>

</div>






<button onClick={ backhandler}>Back</button>

    </div>
  )
}

export default Details