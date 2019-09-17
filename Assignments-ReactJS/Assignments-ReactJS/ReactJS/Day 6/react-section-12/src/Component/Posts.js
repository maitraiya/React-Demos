import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../Post/Post';

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
    
    render (){
        const posts = this.state.posts.map(post =>{
            return (
            <Post  key={post.id} 
             title={post.title} 
             author={post.author}
              />
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

