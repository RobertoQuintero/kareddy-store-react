import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { connect } from 'react-redux'


const MainMenu = ({cart}) => {
  
    return (
      <div className='navbar navbar-expand-sm navbar-dark px-sm-5 navWrapper align-items-center'>
        <Link to='/'>
          <h1 className="navbar-brand mb-0">Kareddy Store</h1>
        </Link>
        <ul className="navbar-nav" >
          <li className="nav-item ml-5 "><NavLink to="/" className="nav-link ">Productos</NavLink></li>
        </ul>
        <Link to='/carrito' className='ml-auto'>
          <button className="button">
            <span className="mr-2">
            <i className="fas fa-cart-plus"/> 
            </span>
            carrito {`${cart.length>0 ? cart.length : ' '}`}
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
