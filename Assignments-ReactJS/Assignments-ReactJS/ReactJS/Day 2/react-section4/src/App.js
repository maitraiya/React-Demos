import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import Validation from './Validation/Validation'
import Char from './Char/Char'
class App extends Component {  
state ={
  text:''
}
calLength=(event)=>{
  
this.setState(
  {
    text:event.target.value
  }
);
};
deletion = (index) => {
        let text 
        let textArr = this.state.text.split('');
        textArr.splice(index, 1);
        text = textArr.join('');
        this.setState({ text });
    };
render() {
      let characters;
      if(this.state.text.length > 0){
          characters = this.state.text.split('');
          // alert(characters);
          characters = characters.map((char, index) => {
              return <Char key={char + index} character={char} click={() => this.deletion(index)} />;
          })
    }
  return(
    <div className='App'>
      <h1>Welcome to InstantDeal section 4</h1>
      <input type="text" placeholder='Enter Product Name' onChange={this.calLength}/>
      <p>Length : {this.state.text.length}</p>
      <Validation len={this.state.text.length}/>
      {characters}
    </div>
  );

}
}
export default App;
