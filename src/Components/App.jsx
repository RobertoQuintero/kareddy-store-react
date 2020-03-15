import React from 'react';
import '../Styles/styles.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductList from './Pages/ProductList'
import ProductDescription from './Pages/ProductDescription'
import Cart from './Pages/Cart'
import Page404 from './Pages/Page404';
import MainMenu from './Organisms/MainMenu'

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route path='/products/:id' component={ProductDescription}/>
        <Route path='/carrito' component={()=> <Cart />} />

        <Route component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;
