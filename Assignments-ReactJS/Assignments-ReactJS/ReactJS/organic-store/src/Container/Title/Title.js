import React, {Component} from 'react';
import {NavLink,Redirect,Switch} from 'react-router-dom';
import  './Title.css';
import logo from '../../Assets/logo.png';
import cartLogo from '../../Assets/cart-logo.png';
import {connect} from 'react-redux'
class Title extends Component{
    state={
        submitted:false,
        id:0
    }
    searchHandler=(event)=>{
        event.preventDefault();
        const id =document.getElementById('text').value;
        this.setState({
            submitted:true,
            id:id
            
        });
    }
    render(){
        let redirect=null;
        if(this.state.submitted){
            redirect = <Redirect to={{
                pathname: '/search',
                id:this.state.id
            }} />
        }
        return(
            <div>
                {redirect}
                <div className='header'>
                <a href="/" className='logo'><img src={logo} alt='Oars'></img></a>
                <div className='header-left'>
                    <img src={cartLogo} className='cartlogo' height='30px' width='30px' alt=''></img>
                    <sup><span className='counter'><b>{this.props.Counter}</b></span></sup>
                </div>
               
                <div className='header-right'>
                    <NavLink to="/"  exact>Home</NavLink>
                    <NavLink to="/cart-list" exact>Cart</NavLink>
                    <NavLink to={{
                        pathname:'/product-details',
                        user:false
                    }} >{this.props.isUser ? 'User' : 'Admin'}</NavLink>
                </div>
                </div>
                
                
            </div> 
        );
    };
}
const mapStateToProps = state =>{
    return {
        Counter:state.CartCounter,
        isUser:state.isUser
    };
};
export default connect(mapStateToProps)(Title);