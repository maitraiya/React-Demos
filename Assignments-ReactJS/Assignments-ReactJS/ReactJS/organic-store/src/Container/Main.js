import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import ProductDetails from './ProductDetails/ProductDetails';
import Home from '../Container/Home/Home';
import Title from '../Container/Title/Title';
import CartList from '../Container/CartList/CartList';
import AddProduct from '../Container/AddProduct/AddProduct';
import UpdateProduct from '../Container/UpdateProduct/UpdateProduct';

class Main extends Component{
    render(){
        return(
            <div>
                <div>
                    <Title />
                </div>
                <Switch> 
                    <Route path="/" exact component={Home}/>
                    <Route path="/product-details" exact component={ProductDetails}/>
                    <Route path="/cart-list" exact component={CartList}/>
                    <Route path="/Add-Product" exact component={AddProduct}/>
                    <Route path="/Update-Product" exact component={UpdateProduct}/>
                    <Route path="/search" exact component={ProductDetails}/>
                </Switch>
            </div> 
        );
    };
}
export default Main;