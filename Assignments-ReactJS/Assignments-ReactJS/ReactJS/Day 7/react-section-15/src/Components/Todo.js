import React,{useState,useReducer,useMemo} from 'react';

const Todo =props =>{
    let [todoName, setTodoName] = useState('');
    const todoListReducer=(state,action) =>{
        switch(action.type)
        {
            case 'Add':
                return state.concat(action.payload);
           
            case 'Remove':
                return state.filter(todoList => todoList!==action.payload)
           
            
        }
    }
    const [todoList,dispatch] = useReducer(todoListReducer,[]);
    const onChangeHandler = (event) =>{
        setTodoName(event.target.value);
    }
    const onSubmitHandler = () =>{
        dispatch({type:'Add',payload:todoName});
    }    
    const onRemoveHandler = (todoName) =>{
        console.log(todoName);
        dispatch({type:'Remove',payload:todoName});

    }    

    return (
        
        <div>
            <input type= "text" placeholder="To do item ....?" onChange={onChangeHandler}/>
            <button onClick={onSubmitHandler}>Set Item</button>
            <ul>
                
                {todoList.map(todoname =><li key={todoname} onClick={()=>onRemoveHandler(todoname)}>{todoname}</li>)}
            </ul>
        </div>

    );
}

export default Todo;