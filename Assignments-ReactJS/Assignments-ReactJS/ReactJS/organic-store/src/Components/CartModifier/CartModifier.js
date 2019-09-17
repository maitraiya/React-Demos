import React, {Component} from 'react';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

class CartModifier extends Component{
   
    render(){
        return(
                <div>
                    <button onClick={this.props.cartAdd} className='btn btn-primary' style={{width:'40%',height:'35px',borderRadius:'10px',fontWeight:'bold',float:'left',margin:'0px'}}>+</button>
                                       
                    <button onClick={this.props.cartDelete} className='btn btn-primary' style={{width:'40%',height:'35px',borderRadius:'10px',fontWeight:'bold',float:'right',margin:'0px'}}>-</button>
                    <p className='badge badge-success' id={this.props.id+'qty'} >
                                {this.props.cartItem.map(item=>{
                                  return this.props.id===item.id? item.quantity:''
                                })
                                }
                    </p>        
                </div>
        )};    
}
const mapStateToProps = state =>{
    return {
        Counter:state.CartCounter,
        products:state.products,
        localResponse:state.localResponse,
        cartItem:state.cartItem,
        searchedItem:state.searchedItem,
    };
};
export default connect(mapStateToProps)(CartModifier);