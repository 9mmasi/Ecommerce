import { Link } from 'react-router-dom'


const ProductCard = (props) => {
 
  return (
     <div  className="product-card">
              <img src={props.product.image} alt={props.product.name} className='product-card-image'/>
              <div className='product-card-content'>
                <h3 className='product-card-name'>{props.product.name}</h3>
                <p className='product-card-price'>${props.product.price}</p>
                 <div className="product-card-actions">
                <Link className='btn btn-secondary' to={`product/${props.product.id}`}>View Details</Link>
                <button className='btn btn-primary' onClick={()=>props.addItem(props.product)}>Add to cart</button>
              </div>
              </div>
             
              
              
            </div>
  )
}

export default ProductCard