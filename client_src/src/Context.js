import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data';
import Axios from 'axios';


const ProductContext = React.createContext();


class ProductProvider extends Component{

    state={
        products: [], 
        detailProduct: detailProduct
    };

    componentDidMount(){
        Axios.get("http://localhost:3000/api/Products")
        .then(result => {
            if(result.status === 200){
                this.setState({products: result.data})
            }
            
        })
    }

    handleDetail = () => {
        console.log('hello det');
    };

    addToCart = () => {
        console.log('hello add cart');
    };

     render() {
        return(
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
     
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};