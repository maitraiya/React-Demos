import axios from 'axios';
export const DISPLAY='DISPLAY';
export const INITIAL='INITIAL';
export const CARTADDER='CARTADDER';
export const DELETION='DELETION';
export const SEARCH='SEARCH';
export const CARTDELETER='CARTDELETER';
export const USERCHANGERTRUE='USERCHANGERTRUE';
export const USERCHANGERFALSE='USERCHANGERFALSE';
export const userChangerTrue =() =>{
    
    return{
        type:USERCHANGERTRUE,
    };
};
export const userChangerFalse =() =>{
    
    return{
        type:USERCHANGERFALSE,
    };
};

export const Display =(localCategory) =>{
    
    return{
        type:DISPLAY,
        localCategory:localCategory
    };
};

export const categoryPass = (Initialproduct,localResponse) =>{
    return{
    type:INITIAL,
    Initialproduct:Initialproduct,
    localResponse:localResponse
    };
}
export const Initial =() =>{
    return dispatch =>{
        let Initialproduct=[]
        let localResponse=[]
            axios.get('http://localhost:3000/api/products')
            .then(response =>{
                for(let i=0;i<response.data.length;i++)
                {
                    Initialproduct.push(response.data[i]);
                }
                localResponse=[...response.data]
                dispatch(categoryPass(Initialproduct,localResponse))
            });          
    };
}
export const Deletion = (id,Initialproduct,localResponse) =>{
    return{
    type:DELETION,
    id,
    Initialproduct,
    localResponse
    };
}
export const ProductDeleter =(id) =>{
    return dispatch =>{
        let Initialproduct=[]
        let localResponse=[]
        const url = 'http://localhost:3000/api/products/'+id;
            axios.delete(url)
            .then(() =>{
                axios.get('http://localhost:3000/api/products')
                .then(response1 =>{
                    for(let i=0;i<response1.data.length;i++)
                    {
                        Initialproduct.push(response1.data[i]);
                    }
                    localResponse=[...response1.data]
                    dispatch(Deletion(id,Initialproduct,localResponse))
                });                              
            });          
    };
}
export const CartAdder =(id) =>{
    return{
        type:CARTADDER,
        id:id
    };
};
export const CartDeleter =(id) =>{
    return{
        type:CARTDELETER,
        id:id
    };
};