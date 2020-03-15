import React from 'react'
import { connect } from 'react-redux'
import EmptyCart from '../Molecules/EmptyCart'
import Title from '../Molecules/Title'
import CartColumns from '../Molecules/CartColumns'
import  CartTotals  from '../Molecules/CartTotals'
import CartList from '../Molecules/CartList'

const Cart = ({cart}) => {
  return (
    <>
      {
        cart.length > 0
          ? <><Title name='carrito' title='de compras'/><CartColumns /><CartList /><CartTotals /></>
          : <EmptyCart />
      }
    </>
  )
}
const mapStateToProps = state =>({
  cart: state.cartReducer.cart
  
})

export default connect(mapStateToProps,{})(Cart)
