import React from 'react'

import { getProducts } from '../data/products'
import {  useCart } from "react-use-cart";
import ProductCard from '../components/ProductCard'

const Home = () => {
  const products=getProducts()
   const { addItem } = useCart();
  return (
    <div className='page'>
      <div className="home-hero">
        <h1 className='home-title'>Welcome to shopEZ</h1>
        <p className='home-subtitle'>Discover amazing products at unbeatable prices!</p>
      </div>
      <div className="container">
        <h2 className='page-title'>Featured Products</h2>
        <div className="product-grid">
          {products.map((product)=>(
           <ProductCard product={product} addItem={addItem} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home