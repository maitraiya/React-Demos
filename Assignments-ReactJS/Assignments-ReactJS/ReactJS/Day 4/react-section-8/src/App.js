import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Blog from './Container/Blog/Blog'

class App extends Component {

  render() {
  
    return (
      <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
