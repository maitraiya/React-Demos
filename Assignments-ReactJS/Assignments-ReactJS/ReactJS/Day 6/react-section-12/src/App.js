import React,{Component} from 'react';
import './App.css';
import * as actionCreator from './actionCreator'
 import {connect} from 'react-redux';

class App extends Component {
  render(){
    return (
      <div className="App">
      <h1>Welcome to Redux Assignment</h1>
      <button onClick={this.props.onPost}>Show Result</button>
      <div>
      <ul>
        { this.props.posts != null ? this.props.posts.map(post =>(
          <li key={new Date()}>{post.title}</li>
        )) : console.log('sadasd',this.props.posts)
          }
      </ul>
      </div>             
  
      </div>
    );  
  }
}

const mapStateToProps = state=> {
  return{
      posts:state.posts
  };
}
const mapDispatchToProps = dispatch =>{
  return{
      onPost:()=>dispatch(actionCreator.onPost())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
