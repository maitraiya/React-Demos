import React from 'react'
import  './Post.css';

const Post = (props) =>{
   return (
       <div className='Post' onClick={props.clicked}>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
       </div>
   ); 
}

export default Post;