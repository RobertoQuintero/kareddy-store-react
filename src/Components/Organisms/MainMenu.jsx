import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'


const MainMenu = ({cart}) => {
  
    return (
      <div className='navbar navbar-expand-sm navbar-dark px-sm-5 navWrapper'>
        <Link to='/'>
          <h1 className="navbar-brand">Kareddy Store</h1>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5"><NavLink to="/" className="nav-link">Products</NavLink></li>
        </ul>
        <Link to='/carrito' className='ml-auto'>
          <button className="button">
            <span className="mr-2">
            <i className="fas fa-cart-plus"/> 
            </span>
            carrito {`${cart.length}`}
          </button>
        </Link>
      </div>
    )
  
}

const mapStateToProps = state =>({
  cart: state.cartReducer.cart
})

export default connect(mapStateToProps,{})(MainMenu)
// export default MainMenu
