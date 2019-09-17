

const initialstate ={
    posts:null
}
const reducer = (state=initialstate,action) =>{
    if(action.type==='ONPOST')
    {   
        
        return {
            ...state,
            posts:action.value
        }
        
    }
    return state;
}
export default reducer;