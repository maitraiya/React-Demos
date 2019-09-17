export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const INCREMENTBY5='INCREMENTBY5';
export const DECREMENTBY10='DECREMENTBY10';
export const STORE_RESULTS='STORE_RESULTS';

export const increment =() =>{
    return{
        type:INCREMENT
    };
};
export const decrement =() =>{
    return{
        type:DECREMENT
    };
};export const incrementby5 =(val) =>{
    return{
        type:INCREMENTBY5,
        value:val
    };
};export const decrementby10 =(val) =>{
    return{
        type:DECREMENTBY10,
        value:val
    };
};
export const saveRes = (ctr) =>{
    return{
    type:STORE_RESULTS,
    res:ctr
    };
}
export const stored_results =(ctr) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(saveRes(ctr));
        },5000)
    };
}
