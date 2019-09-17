import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
    return (
      <div className="App">
      <h1><marquee>Welcome to InstantDeal</marquee></h1>
          <UserOutput productName = 'Moto G5s Plus' cashback = '1000'/>
          <UserOutput productName = {this.state.productInfo[0].productName}  cashback ={this.state.productInfo[0].cashback}/>
          <UserOutput productName = {this.state.productInfo[1].productName}  cashback ={this.state.productInfo[1].cashback} />
          <button className='button' onClick={this.changeOffers}>Its Boring! Show me something Exciting offers!</button>
          {
            this.state.display ===true ? 
          <div >
            <h1>Hurray ! you are eligible to modify offer on product</h1>
            <UserInput inputChange={this.inputChangeEvent} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
