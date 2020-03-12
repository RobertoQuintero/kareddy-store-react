import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({img,inCart,name,price,id}) => {
  
  return (
    <div className='col-9 mx-auto col-md-6 col-lg-3 my-3 wrapper'>
        <div className="card">
          <div className="img-container p-5" onClick={()=> { }}>
          <Link to={`/products/${id}`}>
            <img src={img} alt="product"className='card-img-top'/>
          </Link>
          <button 
            className='cart-btn' 
            disabled={inCart ? true : false} 
            onClick={()=>{ }}>
            {
              inCart ? <p className='text-capitalize mb-0' disabled>
              {' '}
              in Cart
            </p>: (<i className='fas fa-cart-plus'></i>)
            }
          </button>
        </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">
          {name}
        </p>
        <h5 className="text-blue font-italic mb-0">
          <span className="mr-1">$</span>
          {price}
        </h5>
      </div>
    </div>
  </div>
  )
}

export default Product
