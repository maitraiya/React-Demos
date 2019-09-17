import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartModifier from '../CartModifier/CartModifier';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

class Product extends Component{
   state={
       AddedToCart:false
   }
    cartAdd=()=>{
        this.setState({AddedToCart:true})
        this.props.cartAdd();
    }
    render(){
        console.log(this.state)
        return(
                <div className='container'>
                    <div className='card effect'>
                    <img src={this.props.imageUrl} className='card-header' width='400px' height='150px' alt={this.props.title}></img>
                    <div className='card-body' >
                    <h1>{this.props.title}</h1>
                    <p>Rs.{this.props.price}</p>
                    </div>
                    <div className='card-footer'>
                    {
                        this.props.user?                        
                        <div>
                            {this.state.AddedToCart?
                                    this.props.cartItem.map(item=>(
                                        this.props.id===item.id?
                                        item.quantity>0?                                        
                                        <CartModifier key={this.props.id} id={this.props.id} cartAdd={this.props.cartAdd} cartDelete={this.props.cartDelete}/>
                                        :<button className='btn btn-success' style={{width:'100%'}} key={this.props.id} onClick={this.cartAdd}>Add to Cart</button>:''

                                    )):
                                    <button className='btn btn-success' style={{width:'100%',borderRadius:'25px'}} onClick={this.cartAdd}>Add to Cart</button>
                            }                             
                        </div>
                        :
                        <div >
                            <button className='btn btn-success' style={{width:'100%' ,borderRadius:'25px',margin:'5px'}} onClick={this.props.clickedDelete}>Delete</button>
                            <button className='btn btn-success' style={{width:'100%' ,borderRadius:'25px',margin:'5px'}} onClick={this.props.clickedUpdate}>Update</button>
                        </div>
                    }
                    </div>
                    </div>
                </div>
        );
    };
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

export default connect(mapStateToProps)(Product);