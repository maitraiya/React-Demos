import React, {useContext} from "react";
import authContext from './authContext';
const Header = props =>{
    const auth = useContext(authContext);
    return(
        <header>
            {auth.status ? <button onClick = {props.onLoadTodo}>Todo List</button> : ''}
            <button onClick={props.onLoadAuth}>Log in </button>
        </header>
    );
}
export default Header;