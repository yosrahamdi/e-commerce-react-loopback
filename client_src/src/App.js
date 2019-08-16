import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {ProductProvider} from './Context';



class App extends Component {
    render() {
        return(
        <React.Fragment>
            <ProductProvider>
           <BrowserRouter>
           <Navbar />
            <Switch>
                <Route path="/Prod" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
            </Switch>
            </BrowserRouter>
            </ProductProvider>
        </React.Fragment>
     
   );
    
}
}

export default App;