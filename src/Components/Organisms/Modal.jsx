import React from 'react'

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="container">
        <div className="row">
          <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
            <h5>item added to cart</h5>
            <img src={img} alt={title} className='img-fluid'/>
            <h5>{title}</h5>
            <h5 className="text-muted">price : $ {price}</h5>
            <Link to='/'>
              <div className="button" onClick={}>
                store
              </div>
            </Link>
            <Link to='/cart'>
              <button className="button" cart onClick={}>
                go to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
