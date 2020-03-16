import React from 'react'
import { connect } from 'react-redux'
import { manageModal } from '../../Redux/actionsCreators'
import {Link} from 'react-router-dom'

const Modal = ({closeModal,product}) => {
  return (
    <>
    {
      product &&
      <div className="modal-container">
          <div className="container">
            <div className="row">
              <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                <h5>producto agregado</h5>
                <img src={product.image} alt={product.name} className='img-fluid'/>
                <h5 className="pt-3">{product.name}</h5>
                <h5 className="text-muted">precio : $ {product.price}</h5>
                <Link to='/'>
                  <button className="button" onClick={()=> closeModal()}>
                    productos
                  </button>
                </Link>
                <Link to='/carrito'>
                  <button className="button yellow" onClick={()=>closeModal()}>
                    ir al carrito
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    }
    </>
  )
}

const mapStateToprops= state =>({
  product: state.modalReducer.product
})
const mapDispatchToProps = dispatch => ({
  closeModal(){
    dispatch(manageModal())
  }
})

export default connect(mapStateToprops, mapDispatchToProps)(Modal)
