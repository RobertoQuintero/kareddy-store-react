import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../Redux/store'
import { getAllProducts} from '../../Redux/actionsCreators'
import Title from '../Molecules/Title'
import Product from '../Organisms/Product'

const ProductList = ({products}) => {

  useEffect(()=>{
    store.dispatch(getAllProducts())
  },[])
  return (
    <div className="py-5">
      <div className="container">
        <Title name='Nuestros' title='Productos'/>
        <div className="row">
          {
            products &&
            products.map(p => <Product name={p.name} price={p.price} image={p.image} inCart={false} key={p.id} id={p.id}/>)
          }
         
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = state =>({
  products : state.productsReducer.products
})
export default connect(mapStateToProps,{})(ProductList)
