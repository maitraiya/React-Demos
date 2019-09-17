import React, {Component} from 'react';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product'
import {connect} from 'react-redux';
import * as actionCreator from '../../Action/ActionCreator';
import {Redirect,NavLink} from 'react-router-dom';
import shortid from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css'

class ProductDetails extends Component{
    state={
        submitted:false,
        id:0,
        ProdId:'',
        title:'',
        category:'',
        price:'',
        imageUrl:'',
        searched:false,
        user:false
    }

    componentWillUnmount=()=>{
        this.setState({user:false});
        this.props.userChangerFalse();
        
    }
    componentDidMount = () =>{
        
        if(this.props.location.user == true)
        {
            this.setState({user:true}); 
            this.props.userChangerTrue();
        }
        else{
            this.setState({user:false});
            this.props.userChangerFalse();
        }
        this.props.Initial();
    }

    //Searching data
    searchHandler=(event)=>{
        let title = event.target.value;
        if(event.target.value.length==0)
        {
            this.setState({
                searched:false,
            });
        }
        this.props.products.map(prod => {
            if((prod.title.toLowerCase().localeCompare(title.toLowerCase()))==0)
            {
                this.setState(
                {
                    ProdId:prod.id,
                    title:prod.title,
                    category:prod.category,
                    price:prod.price,
                    imageUrl:prod.imageUrl,
                    searched:true
                });
            }
        });
    }

    //initialize when user clicks update button
    UpdateHandler = (id) =>{
        this.setState({
            submitted:true,
            id:id
        });
    } 
    
    //Category Display handler
    CategoryHandler=(category)=>{
        this.setState({
            searched:false
        });
        const elem = document.getElementById('prod');
        if(elem)
        elem.scrollIntoView({ behavior: 'smooth'});
        this.props.Categories(category.toLowerCase())
    }

    //Handles when user clicks delete
    ProductDeleter=(id)=>{
        this.setState({searched:false});
        this.props.ProductDeleter(id)
    }
    render(){
        let Categories=[,'Vegetables','All-categories','Fruits']
        let redirect=null;
        if(this.state.submitted){
            redirect = <Redirect to={{
                pathname: '/Update-Product',
                id:this.state.id
            }} />
        }
        return(            
            <div className='container'> 
                {redirect}
                <h1 style={{margin:'10px'}}>Explore wide range of categories</h1>
                <hr style={{color:'green'}}>
                </hr>
                <div className='d-flex justify-content-center'>
                        {Categories.map(category=>(
                            <div>
                                 <Category key={shortid.generate()} category={category} clicked={()=>{this.CategoryHandler(category)}}/> 
                            </div>
                        ))}
                </div>
                <hr style={{color:'green'}}>
                </hr>

                <div className='d-flex justify-content-center'>
                    <div style={{margin:'20px'}}>             
                        <form>
                            <input id='text' className="form-control" type="text" placeholder="Search..." onChange={(event)=>this.searchHandler(event)} />
                        </form>
                    </div>
                </div>
                    <div>
                        {(!this.state.user)?<NavLink to="/Add-Product" className='btn btn-primary' style={{margin:'20px'}}>Add Product</NavLink>:''}
                    </div>
               
                <div id='prod' className='d-flex row justify-content-center'>
                { 
                    (!this.state.searched) ? 
                        this.props.products.map(prod =>
                            <div>
                                <Product
                                    key={prod.id}
                                    id={prod.id}
                                    category={prod.category}
                                    imageUrl={prod.imageUrl} 
                                    price={prod.price} 
                                    title={prod.title} 
                                    cartDelete={()=>{this.props.CartDeleter(prod.id)}}
                                    cartAdd={()=>{this.props.CartAdder(prod.id)}}
                                    clickedDelete={()=>{this.ProductDeleter(prod.id)}} 
                                    clickedUpdate={()=>{this.UpdateHandler(prod.id)}}
                                    user={this.state.user}/>
                            </div>
                        )
                        :<div>
                            <Product 
                            key={this.state.ProdId} 
                            id={this.state.ProdId}
                            category={this.state.category} 
                            imageUrl={this.state.imageUrl} 
                            price={this.state.price} 
                            title={this.state.title} 
                            cartAdd={()=>{this.props.CartAdder(this.state.ProdId)}} 
                            cartDelete={()=>{this.props.CartDeleter(this.state.ProdId)}} 
                            clickedDelete={()=>{this.ProductDeleter(this.state.ProdId)}} 
                            clickedUpdate={()=>{this.UpdateHandler(this.state.ProdId)}}
                            user={this.state.user}/>
                        </div>
                    }
                    {this.props.products.length==0?<h1 style={{top:'40%',left:'40%',position:'absolute'}}>Empty Data in Category</h1>:''}

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
const mapDispatchToProps = dispatch =>{
    return {
            
            Categories : (category)=> dispatch(actionCreator.Display(category)),
            Initial : ()=> dispatch(actionCreator.Initial()),
            CartAdder: (id)=>dispatch(actionCreator.CartAdder(id)),
            ProductDeleter: (id)=>dispatch(actionCreator.ProductDeleter(id)),
            CartDeleter: (id)=>dispatch(actionCreator.CartDeleter(id)),
            userChangerTrue: ()=>dispatch(actionCreator.userChangerTrue()),
            userChangerFalse: ()=>dispatch(actionCreator.userChangerFalse()),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);