import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { clearCart } from '../../Redux/actionsCreators'

const CartTotals=({cart,clearAllProducts})=> {
  let subtotal=0,tax=0,total=0
  if(cart){
    subtotal = cart.map(p=> p.price).reduce((a,b)=> a+ b,0)
    tax = subtotal * 0.16
    total = subtotal + tax
  }
  return (
    <>
      { 
        <div className="container">
        <div className="row">
          <div className="col-10 mt-2 mb-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type='button'
               onClick={()=> clearAllProducts()}>vaciar carrito</button>
              </Link>
            {/* <h5>
              <span className="text-title">subtotal: </span>
              <strong>$ {subtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">IVA: </span>
              <strong>$ {tax}</strong>
            </h5> */}
            <h5>
              <span className="text-title">total: </span>
              <strong>$ {subtotal}</strong>
            </h5>
          </div>
        </div>
      </div>
      }
    </>
  )
}
const mapStateToProps= state=>({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch =>({
  clearAllProducts(){
    dispatch(clearCart())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(CartTotals)