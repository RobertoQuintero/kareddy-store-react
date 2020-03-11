import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../Redux/store'
import { getAllProducts, getProduct } from '../../Redux/actionsCreators'
import Title from '../Molecules/Title'
import Product from '../Organisms/Product'

const ProductList = ({products,product}) => {

  useEffect(()=>{
    store.dispatch(getAllProducts())
    store.dispatch(getProduct('5e67c51a2b7ba30ba42c7941'))
  },[])
  return (
    <div className="py-5">
      <div className="container">
        <Title name='our' title='products'/>
        <div className="row">
          {
            products &&
            products.map(p => <Product name={p.name} price={p.price} img={p.image} inCart={false} key={p._id} id={p._id}/>)
            
          }
          {console.log(product)}
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = state =>({
  products : state.productsReducer.products,
  product : state.productsReducer.product
})
export default connect(mapStateToProps,{})(ProductList)
