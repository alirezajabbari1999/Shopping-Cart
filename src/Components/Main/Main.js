import React,{useState} from 'react'
import './Main.css'
import Product from '../Product/Product'
import productData from '../../ProductData'


export default function Main() {

  const [allProducts, setAllProducts] = useState(productData)

  return (
    <div className='main-container'>
      <h1 className='main-title'>All Product</h1>
      <div className="products">
        {allProducts.map((product)=>(
          <Product {...product}/>
        ))}
      </div>
    </div>
  )
}
