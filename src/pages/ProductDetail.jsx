import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../data/products'

const ProductDetail = () => {
    const [productDetail, setProductDetail] = useState(null)
    let {id}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
        // fetch product details using product ID from URL params
        const productView=getProductById(id)
        if(!productView){
            // handle product not found (e.g. show error message or redirect)
            navigate('/')
            return
        }

        setProductDetail(productView)
    
    }, [id])
  return (
    <div className='page'>
        <div className="container">
        
            <div className="product-detail">
                <div className="product-detail-image">
                    <img src={productDetail?.image} alt={productDetail?.name} srcSet="" />
                </div>
                <div className="product-detail-content">
                    <h1 className='product-detail-name'>{productDetail?.name}</h1>
                    <p className='product-detail-price'>Price: ${productDetail?.price}</p>
                    <p className='product-detail-description'>{productDetail?.description}</p>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail