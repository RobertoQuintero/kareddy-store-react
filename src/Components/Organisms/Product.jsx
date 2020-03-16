import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, manageModal } from '../../Redux/actionsCreators'

const Product = ({image,cart,name,price,id,addProductToCart,openModal}) => {
  const product = {
    image,name,price,id
  }
  return (
    <div className='col-9 mx-auto col-md-6 col-lg-3 my-3 wrapper'>
        <div className="card">
          <div className="img-container p-5" >
          <Link to={`/products/${id}`}>
            <img src={image} alt="product" className='card-img-top'/>
          </Link>
          {
            cart.find(el => el.id === id)
              ? <button className="cart-btn btn-y">Agregado</button>
              : <button 
                  className='cart-btn' 
                  onClick={()=>{
                    addProductToCart(product)
                    openModal(product)
                  } }><i className='fas fa-cart-plus'></i>
                </button>
          }
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

const mapStateToProps = state =>({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch =>({
  addProductToCart(product){
    dispatch(addToCart(product))
  },
  openModal(product){
    dispatch(manageModal(product))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Product)
