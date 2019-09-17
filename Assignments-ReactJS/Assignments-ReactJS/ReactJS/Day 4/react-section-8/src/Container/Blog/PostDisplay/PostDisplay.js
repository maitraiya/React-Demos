import React ,{ Component } from 'react'
import  './PostDisplay.css';
import axios from 'axios';

class PostDisplay extends Component{
state = {
    post:null
}
componentDidMount(){
    if(this.props.match.params.id){
        if(!this.state.post || (this.state.post && this.state.post.id !==this.props.match.params.id)){
            let URL ='https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id;
            axios.get(URL)
            .then(response =>{
                this.setState({post:response.data});
            });
        }        
    }
}
render(){
        let post = <p>Select the post</p>
        if(this.props.match.params.id){
            post = <p>Loading...</p>
        if(this.state.post){
            post = (
                <div className ='PostDisplay' >
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                   
                </div>
                )
            }
        }
            return ( 
                post
            ); 
        }
}
export default PostDisplay;