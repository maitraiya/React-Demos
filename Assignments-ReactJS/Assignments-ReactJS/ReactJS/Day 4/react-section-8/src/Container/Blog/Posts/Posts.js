import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../Post/Post';
import {Link} from 'react-router-dom';
class Posts extends Component {
    state = {
        posts:[],
        selectedId:null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
          const posts = response.data.slice(0,3);
          const postsUpdated = posts.map(post =>{
              return {
                ...post,
                author:'Maitraiya'
              }
          }); 
            this.setState({
              posts:postsUpdated
            });
        });
    }
    DisplayPostHandler = (id) =>{
        this.props.history.push('/'+id);
    }
    
    render (){
        const posts = this.state.posts.map(post =>{
            return (
            <Post  key={post.id} 
             title={post.title} 
             author={post.author}
              clicked={()=>{this.DisplayPostHandler(post.id)}}/>
            );
         });

        return (
            <div className="App">
                {posts}
            </div>
        );
    }
}
export default Posts;

