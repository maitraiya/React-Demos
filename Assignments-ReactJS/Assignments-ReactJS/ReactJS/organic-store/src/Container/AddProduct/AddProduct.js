import React,{Component} from 'react';
import styles from './AddProduct.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class AddProduct extends Component{
    state={
        ProdName:null,
        ProdPrice:null,
        ProdCategory:null,
        ProdImageUrl:null,
        errors:{
            ProdName:'',
            ProdPrice:'',
            ProdCategory:'', 
            ProdImageUrl:''               
        },
        submitted:false
    }
    handleChange = (event) =>{ //Validating the inputs
        const key=event.target.name;
        const value=event.target.value;
        let errors = this.state.errors;
        const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        switch(key){
            case 'ProdName':
                errors.ProdName = value.length>5  ? '' : 'Invalid Product name';  
            break;
            case 'ProdCategory':
                errors.ProdCategory =(value.localeCompare('select')==0) ? 'Invalid Product Category':'';             
            break;
            case 'ProdPrice':
                errors.ProdPrice = (!(isNaN(value))) && value!=0 ? '' : 'Invalid Product price';              
            break;
            case 'ProdImageUrl':
                errors.ProdImageUrl =  regexp.test(value) ? '' : 'Invalid Product Image Url';              
            break;
        }
        this.setState(
            {
                [key]:value,
                errors
            }
        );
    }

    //Checking if error is present in any of field
    handleSubmit=(event)=>{
        event.preventDefault();
        let valid=true;
        let errors = this.state.errors;
        if(errors.ProdName.length>0 && valid==true)
            valid=false;
        if(errors.ProdPrice.length>0 && valid==true)
            valid=false;
        if(errors.ProdCategory.length>0 && valid==true)
            valid=false;
        if(errors.ProdImageUrl.length>0 && valid==true)
            valid=false;    
        if(this.state.ProdCategory==null)
        {
            valid=false;
        }
        if(valid){
           
            const obj ={
                category:this.state.ProdCategory,
                imageUrl:this.state.ProdImageUrl,
                price:this.state.ProdPrice,
                title:this.state.ProdName,
            }
            //Posting data to the server
            axios.post('http://localhost:3000/api/products',obj)
            .then(response=>{
                if(response.status==201){
                    alert('Form Validated and Submitted')
                    this.setState({
                        submitted:true
                    });
                }

            });
        }
        else
            alert('Form Invalid');
    }

    render (){
        let redirect=null;
        if(this.state.submitted){
            redirect = <Redirect to='/' />
        }
        return(
        <div className= {styles['wrapper']}>
            {redirect}
            <div className={styles['form-wrapper']}>
                <h2>Product Entry</h2>
                    <form onSubmit={this.handleSubmit} >
                         <div className={styles['ProdName']}>
                            <label htmlFor="ProdName">Product Name</label>
                            <input type='text' name='ProdName' onChange={this.handleChange} required  />
                            <small>{this.state.errors.ProdName}</small>
                        </div>
                        <div className={styles['ProdPrice']}>
                            <label htmlFor="ProdPrice">Product Price</label>
                            <input type='number' name='ProdPrice' onChange={this.handleChange} required/>
                            <small>{this.state.errors.ProdPrice}</small>
                        </div>
                        <div className={styles['ProdCategory']}>
                            <label htmlFor="ProdCategory">Product Category</label>
                            <select name='ProdCategory' onChange={this.handleChange} required >
                            <option value ='select'>Select</option>
                            <option value ='vegetables'>Vegetables</option>
                            <option value='fruits'>Fruits</option>
                            </select>
                            <small>{this.state.errors.ProdCategory}</small>
                        </div>
                        <div className={styles['ProdImageUrl']}>
                            <label htmlFor="ProdImageUrl">Product Image URL</label>
                            <input type='text' name='ProdImageUrl' onChange={this.handleChange} required  />
                            <small>{this.state.errors.ProdImageUrl}</small>
                        </div>
                        <div className={styles['submit']}>
                            <button className={styles['btn']} type='submit'>Add Product</button>
                        </div>
                    </form>
            </div>
        </div>
        );
    }
} 

export default AddProduct;