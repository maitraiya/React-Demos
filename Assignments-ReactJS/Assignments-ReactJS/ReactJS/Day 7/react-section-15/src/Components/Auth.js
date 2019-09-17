import React,{useContext} from 'react';

import AuthContext from './authContext';

const Auth = props =>{
    const authenticate = useContext(AuthContext);
    
    return (
        <div>
            <h1>Auth Component</h1>
            <button onClick ={authenticate.login}>Log in!</button>
        </div>
    );
};
export default Auth;