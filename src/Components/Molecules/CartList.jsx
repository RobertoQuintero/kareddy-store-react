import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

export const CartList= ({cart})=> {
 
  return (
    <div className='container-fluid'>
      {
        cart.map(item => {
          return <CartItem 
                    key={item.id}
                    name= {item.name}
                    price={item.price}
                    image = {item.img}
                    id={item.id}
                  />
        })
      }    
    </div>
  )
}

const mapStateToProps = state => ({
  cart : state.cartReducer.cart
})

export default connect(mapStateToProps,{})(CartList)
