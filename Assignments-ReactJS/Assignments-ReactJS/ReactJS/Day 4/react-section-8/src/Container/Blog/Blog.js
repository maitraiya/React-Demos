import React,{ Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';
import { Route,NavLink,Switch,Redirect } from 'react-router-dom';
import PostDisplay from './PostDisplay/PostDisplay'

class Blog extends Component {
  render() {
   
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/new-post" exact component={NewPosts}/>
          <Route path="/:id" exact component={PostDisplay}/>  
        </Switch>
    
        </div>
    );
  }
}
export default Blog;
