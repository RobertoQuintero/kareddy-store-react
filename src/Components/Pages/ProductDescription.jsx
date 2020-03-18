import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../Redux/store'
import { getProduct, addToCart, manageModal } from '../../Redux/actionsCreators'
import { Link} from 'react-router-dom'

const ProductDescription = ({product,match,cart,addProductToCart,openModal}) => {
 
  useEffect(()=>{
    store.dispatch(getProduct(`${match.params.id}`))

  },[match])
  return (
    <>
    {
      product &&
      <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{product.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3" >
          <img src={product.image} alt={product.name} className='product-description__img'/>
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <h2>Modelo: {product.model}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            material: <span className='text-uppercase'>
              {product.material}
            </span>
          </h4>
          <h4 className="text-blue">
            <strong>
              Precio: $ {product.price}.00 MXN
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Descripción del producto:
          </p>
          <p className="text-muted lead">{product.description}</p>
          <div>
            <Link to='/'>
              <button className="button">
                Productos
              </button>
            </Link>
            {
              cart.find(p => p._id === product._id)
                ? <button className="button yellow">Agregado</button>
                : <button className="button" onClick={()=>{
                  addProductToCart(product)
                  openModal(product)
                 }}>Agregar al Carrito</button>
            }
            
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

const mapStateToProps = state =>({
  product: state.productsReducer.product,
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductDescription)

