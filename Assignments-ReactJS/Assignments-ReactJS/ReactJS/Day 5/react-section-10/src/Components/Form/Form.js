import React,{Component} from 'react';
import './Form.css';
class Form extends Component{
    state={
        ProdName:null,
        ProdPrice:null,
        ProdQty:null,
        errors:{
            ProdName:'',
            ProdPrice:'',
            ProdQty:'',                
        }
    }
    handleChange = (event) =>{
        const key=event.target.name;
        const value=event.target.value;
        let errors = this.state.errors;
        switch(key){
            case 'ProdName':
                errors.ProdName = value.length>5  ? '' : 'Invalid Product name';  
            break;
            case 'ProdPrice':
                errors.ProdPrice = (!(isNaN(value))) && value!=0 ? '' : 'Invalid Product price';              
            break;
            case 'ProdQty':
                errors.ProdQty = (!(isNaN(value))) && value!=0 && value.length<5  ? '' : 'Invalid Product Quantity';                               
            break;
        }
        this.setState(
            {
                [key]:value,
                errors
            }
        );
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let valid=true;
        let errors = this.state.errors;
        if(errors.ProdName.length>0 && valid==true)
            valid=false;
        if(errors.ProdPrice.length>0 && valid==true)
            valid=false;
        if(errors.ProdQty.length>0 && valid==true)
            valid=false;
            
        if(valid)
            alert('Form Valid');
        else
            alert('Form Invalid');
    }

    render (){
        return(
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Product Entry</h2>
                    <form onSubmit={this.handleSubmit} >
                         <div className='ProdName'>
                         <label htmlFor="ProdName">Product Name</label>
                         <input type='text' name='ProdName' onChange={this.handleChange} required  />
                         <small>{this.state.errors.ProdName}</small>
                        </div>
                        <div className='ProdPrice'>
                            <label htmlFor="ProdPrice">Product Price</label>
                            <input type='text' name='ProdPrice' onChange={this.handleChange} required/>
                            <small>{this.state.errors.ProdPrice}</small>
                        </div>
                        <div className='ProdQty'>
                            <label htmlFor="ProdQty">Product Quantity</label>
                            <input type='text' name='ProdQty' onChange={this.handleChange} required/>
                            <small>{this.state.errors.ProdQty}</small>
                        </div>
                        <div className='submit'>
                            <button input type='submit'>Create</button>
                        </div>
                    </form>
            </div>
        </div>
        );
    }
} 

export default Form;