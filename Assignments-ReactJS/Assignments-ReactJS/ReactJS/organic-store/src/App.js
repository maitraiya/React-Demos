import React,{ Component} from 'react';
import './App.css';
import Main from "./Container/Main";
import { Widget, addResponseMessage } from 'react-chat-widget';
import axios from 'axios';
import 'react-chat-widget/lib/styles.css';
import logo from './Assets/logo.png';

class App extends Component { 
  componentDidMount() { //ChatBot Intial Response 
    addResponseMessage("Welcome to Oars Organic!");
  }
  handleNewUserMessage = (newMessage) => { //ChatBot Async Response
    axios.post('http://localhost:5000/ask',{
      input:newMessage
    })
    .then(response=>{
      console.log(response.data[0])
      addResponseMessage(response.data[0]);
    });
  }
  render(){
    return (
      <div className="App">
          <Main />
          <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Welcome to Oars"
          subtitle="Introducing pure and natural vegetables"
        />
      </div>
    );
  }  
}

export default App;
