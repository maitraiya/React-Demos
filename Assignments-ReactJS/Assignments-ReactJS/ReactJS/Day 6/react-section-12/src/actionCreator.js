import axios from 'axios';

export const ONPOST='ONPOST';

export const getPosts= (posts) =>{
    return{
        type:ONPOST,
        value:posts
    };
}
export const onPost =() =>{
    return dispatch =>{
        let posts=null
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            posts=response.data
            dispatch(getPosts(posts))
        });
    
    };
}

