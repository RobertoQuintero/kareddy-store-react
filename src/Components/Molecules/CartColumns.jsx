import React from 'react'

export default function CartColumns() {
  return (
    <div className='container-fluid text-center d-none d-lg-block mt-5'>
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">productos</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">nombre del producto</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">precio</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">cantidad</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">borrar</p>
        </div>
      </div>
    </div>
  )
}
