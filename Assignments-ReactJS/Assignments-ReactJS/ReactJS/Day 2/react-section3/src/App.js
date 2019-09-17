import React from 'react';
import {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Radium from 'radium';
import {StyleRoot} from 'radium';
class App extends Component{
  state = {
      productInfo:[
        {productName : 'Boats Earphones', cashback : '500'},
        {productName : 'HP Laptop' ,cashback : '2000' }
      ],
      display:false
  }
  changeOffers =() =>{
    this.setState(
      {
        productInfo:[
          {productName : 'Sparx Loafers', cashback : '200'},
          {productName : 'Samsung LED TV' ,cashback : '20,000' }
        ],
        display:!this.state.display  
      }
    )

  }

  inputChangeEvent =(event) =>{
    this.setState(
      {
        productInfo:[
          {productName : 'Sparx Loafers', cashback : event.target.value },
          {productName : 'Samsung LED TV' ,cashback : '20,000' }
        ]  
      }
    )

  }
  render(){
    
    const buttonStyle = {
      textAlign:'center',
      color:'white',
      backgroundColor:'#4285F4',
      padding:'10px',
      borderRadius:'20px',
      outline:'None',
      border:'None',
      boxShadow:'3px 3px 3px 3px #ccc',
      ':hover':{
        backgroundColor:'green',
      }     
    }
    let classes=[];
    if(!this.state.display)
    {
      classes.pop();
      classes.push('green');
    }
    if(this.state.display)
    {
      classes.pop();
      classes.push('red');
    }
   
    return (
      
        <div className="App">
        <h1 className={classes}>Welcome to InstantDeal</h1>
            <UserOutput productName = 'Moto G5s Plus' cashback = '1000'/>
            <UserOutput productName = {this.state.productInfo[0].productName}  cashback ={this.state.productInfo[0].cashback}/>
            <UserOutput productName = {this.state.productInfo[1].productName}  cashback ={this.state.productInfo[1].cashback} />
            <button style={buttonStyle} onClick={this.changeOffers}>Its Boring! Show me something Exciting offers!</button>
            {
              this.state.display ===true ? 
            <div >
              <h1 className={classes}>Hurray ! you are eligible to modify offer on product</h1>
              <UserInput inputChange={this.inputChangeEvent} />
            </div> : null
          }
        </div>
        
    );
  }
}

export default Radium(App);
