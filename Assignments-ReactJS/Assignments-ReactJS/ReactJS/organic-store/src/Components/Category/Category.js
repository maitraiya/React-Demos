import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import veg from '../../Assets/images/veg.png';
import fruits from '../../Assets/images/fruits.png';
import all from '../../Assets/images/all.png';
import './Category.css';

class Category extends Component{

    render(){
        return(
            
            <div className='container effector' onClick={this.props.clicked}>
                {
                    this.props.category.localeCompare('Vegetables')==0?
                    <img src={veg} style={{width:'100px',height:'100px',marginLeft:'100px',marginRight:'100px'}} ></img>
                    :this.props.category.localeCompare('All-categories')==0?
                    <img src={all} style={{width:'100px',height:'100px',marginLeft:'100px',marginRight:'100px'}}></img>
                    :this.props.category.localeCompare('Fruits')==0? 
                    <img src={fruits} style={{width:'100px',height:'100px',marginLeft:'100px',marginRight:'100px'}}></img>
                    :''
                }                   
                <h5 style={{margin:'10px'}}>{this.props.category}</h5>
            </div>  
        );
    };
}
export default Category;