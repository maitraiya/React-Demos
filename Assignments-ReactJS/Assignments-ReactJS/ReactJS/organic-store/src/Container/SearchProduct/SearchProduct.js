// import React, {Component} from 'react';
// import Category from '../../Components/Category/Category';
// import Product from '../../Components/Product/Product'
// import {connect} from 'react-redux';
// import * as actionCreator from '../../Action/ActionCreator';
// import './ProductDetails.css';
// import {Redirect,Route,NavLink} from 'react-router-dom';
// import UpdateProduct from '../UpdateProduct/UpdateProduct'

// class SearchedProduct extends Component{
//     state={
//         submitted:false,
//         id:0
//     }
//     componentDidMount = () =>{
//             this.props.Initial();
//     }
//     UpdateHandler = (id) =>{
//         this.setState({
//             submitted:true,
//             id:id
//         });
//     } 
//     render(){
//         let redirect=null;
//         if(this.state.submitted){
//             redirect = <Redirect to={{
//                 pathname: '/Update-Product',
//                 id:this.state.id
//             }} />
//         }
//         return(            
//             <div> 
//                 {redirect}
//                 <div>
//                     <Category category={'All-categories'} value='All-categories' clicked={()=>{this.props.AllCategories('All-Categories')}}/> 
//                     <Category category={'vegetables'} value='vegetables' clicked={()=>{this.props.Vegetable('vegetables')}}/> 
//                     <Category category={'fruits'} value='fruits' clicked ={()=>{this.props.Fruits('fruits')}}/> 
//                 </div>
//                 <div>
//                         {this.props.products.map(prod =>
//                         <Product key={prod.id} category={prod.category} imageUrl={prod.imageUrl} price={prod.price} title={prod.title} clicked={()=>{this.props.CartAdder(prod.id)}} clickedDelete={()=>{this.props.ProductDeleter(prod.id)}} clickedUpdate={()=>{this.UpdateHandler(prod.id)}}/>
//                     )}
//                 </div>
//             </div>        
//         );
//     };
// }
// const mapStateToProps = state =>{
//     return {
//         Counter:state.CartCounter,
//         products:state.products,
//         localResponse:state.localResponse,
//         cartItem:state.cartItem
//     };
// };
// const mapDispatchToProps = dispatch =>{
//     return {
//             Vegetable : (category)=> dispatch(actionCreator.Display(category)) ,
//             AllCategories : (category)=> dispatch(actionCreator.Display(category)) ,
//             Fruits : (category)=> dispatch(actionCreator.Display(category)),
//             Initial : ()=> dispatch(actionCreator.Initial()),
//             CartAdder: (id)=>dispatch(actionCreator.CartAdder(id)),
//             ProductDeleter: (id)=>dispatch(actionCreator.ProductDeleter(id)),
//             Search: (id)=>dispatch(actionCreator.Search(id))
//     };
// };
// export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);