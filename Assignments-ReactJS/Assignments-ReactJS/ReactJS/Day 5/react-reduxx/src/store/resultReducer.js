const initialstate={
    results:[]
}
const resultReducer = (state=initialstate,action) =>{
    switch(action.type)
    {
        case 'STORE_RESULTS':
        return {
            ...state,
            results: state.results.concat({value:action.res, id:new Date()})
        }
        break;

    }

    return state;
}
export default resultReducer;