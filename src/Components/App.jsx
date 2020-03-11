import React from 'react';
import '../Styles/styles.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDescription from './Pages/ProductDescription'
import Cart from './Pages/Cart'
import Page404 from './Pages/Page404';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={()=> <ProductList />}/>
        <Route path='/descripcion' component={()=><ProductDescription />} />
        <Route path='/carrito' component={()=> <Cart />} />

        <Route component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;
