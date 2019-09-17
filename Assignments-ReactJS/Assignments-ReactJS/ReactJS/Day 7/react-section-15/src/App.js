import React,{useState} from 'react';
import Todo from './Components/Todo';
import './App.css';
import Headercomp from './Components/Header';
import Authcomp from './Components/Auth';
import AuthContext from './Components/authContext';

const App = () => {
  const [page,setPage] = useState('');
  const [authStatus, setAuthStatus] = useState(false);
  const switchPage = (pageName) =>{
      setPage(pageName);
  }
  const login = () =>{
      setAuthStatus(true);
  }

  return (
    <div className="App">
        <AuthContext.Provider value={{status:authStatus, login:login }}>
          <Headercomp onLoadAuth={()=>{switchPage('auth')}} onLoadTodo={()=>{switchPage('Todo')}}/>
          <hr></hr>
          {page==='auth' ? <Authcomp /> :page==='Todo'?  <Todo /> :null}
        </AuthContext.Provider>
    </div>
  );
}

export default App;
