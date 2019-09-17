import React,{Component} from 'react';
import {connect} from 'react-redux';
import CartItem from '../../Components/CartItem/CartItem';

class CartList extends Component{
    render(){
        return(
            <div>
                {this.props.cartItem.length==0 ? <h1>Empty Cart Found</h1> :   
                    <CartItem arr={this.props.cartItem}/>                   
                }
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        Counter:state.CartCounter,
        products:state.products,
        localResponse:state.localResponse,
        cartItem:state.cartItem
    };
};
export default connect(mapStateToProps)(CartList);
