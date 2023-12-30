
import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {

const [allProducts, setallProducts] = useState([])
  return (
    <div>

        <ProductContext.Provider value={[allProducts, setallProducts]}>

               {props.children}

        </ProductContext.Provider>
    </div>
  )
}

export default Context