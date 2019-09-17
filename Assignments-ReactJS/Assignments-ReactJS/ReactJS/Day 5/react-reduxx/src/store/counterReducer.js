const initialstate={
    counter:0,
}
const counterReducer = (state=initialstate,action) =>{
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        break;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        break;
        case 'INCREMENTBY5':
            return {
                ...state,
                counter: state.counter + action.value
            }
        break;
        case 'DECREMENTBY10':
            return {
                ...state,
                counter: state.counter - action.value
            }
        break;

    }

    return state;
}
export default counterReducer;