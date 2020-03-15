import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../Redux/actionsCreators'

export const CartItem = ({name,price,image,id,removeProduct})=> {
  
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img 
          src={image} 
          alt={name} 
          style={{width:'5rem',height:'5rem'}} 
          className='img-fluid' 
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>  
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>  
        $ {price}.00 MXN
      </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1">1</span> 
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={()=>{removeProduct(id)}}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({
  removeProduct(id){
    dispatch(removeFromCart(id))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)