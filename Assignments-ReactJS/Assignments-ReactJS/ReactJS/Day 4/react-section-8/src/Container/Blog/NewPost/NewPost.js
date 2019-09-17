import React,{Component} from 'react'
import  './NewPost.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class NewPost extends Component{
    state ={
        title:null,
        body:null,
        author:null,
        submitted:false
    }
    NewPostHandler =()=>{
        const post = {
            title:this.state.title,
            body:this.state.body,
            author:this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts',post)
        .then(response =>{
          console.log(response);
          this.setState({submitted:true});
        });
    }
    render(){
        let redirect=null;
        if(this.state.submitted){
            redirect = <Redirect to="/" />
        }
        return (
        <div className='NewPost'>
                {redirect}
                <h1>Upload your posts here</h1>            
                    <p><input type="text" placeholder="Title comes here ..." onChange={(event)=>{this.setState({title:event.target.value})}}/></p>
                    <p><textarea rows='4' cols='20' placeholder="Body comes here ..."onChange={(event)=>{this.setState({body:event.target.value})}} ></textarea></p>
                    <p>
                        <select onChange={(event)=>{this.setState({author:event.target.value})}}>
                            <option value="Maitraiya">Maitraiya</option>
                            <option value="karan">karan</option>
                        </select>
                    </p>
                    <p><input type="submit" value="Upload Post" onClick={this.NewPostHandler} /></p>
        </div>
        ); 
    }
}

export default NewPost;