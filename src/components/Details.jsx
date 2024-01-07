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
    <div className='h-screen w-full bg-slate-100 flex flex-col items-center justify-around'>

<h1 className='pt-20  text-4xl  text-sky-900 fontfamily text-center'>Product Details</h1>

<div className="listbox h-52 w-96 shadow-lg px-5 py-3">

<span className='text-xl font-semibold text-sky-900'>S.NO:</span> <span className='text-xl font-semibold ml-3'> {allProducts[productList].number}</span> <br />

 <span className='text-xl font-semibold text-sky-900'>Product: </span>  <span className='text-xl font-semibold ml-3'> {allProducts[productList].product}</span> <br />

<span className='text-xl font-semibold text-sky-900'>Size:</span> <span  className='text-xl font-semibold ml-3'> {allProducts[productList].size}</span> <br />

 <span className='text-xl font-semibold text-sky-900'>Quantity:</span> <span className='text-xl font-semibold ml-3'> {allProducts[productList].quantity}</span> <br />

 <span className='text-xl font-semibold text-sky-900'>Stock:</span>  <span  className='text-xl font-semibold ml-3'> {allProducts[productList].stock}</span> <br />

 <span className='text-xl font-semibold text-sky-900'>CompanyName:</span>  <span className='text-xl font-semibold ml-3'> {allProducts[productList].companyName}</span> <br />

</div>



<button onClick={ backhandler} className='h-10 w-24 text-xl rounded-md bg-sky-900 text-white font-bold hover:bg-sky-700'>Back</button>

    </div>
  )
}

export default Details