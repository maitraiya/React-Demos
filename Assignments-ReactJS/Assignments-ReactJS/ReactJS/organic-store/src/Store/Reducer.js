// Global state
const initialstate={
    CartCounter:0,
    products:[],
    localResponse:[],
    cartItem:[],
    searchedItem:[],
    isUser:false
}
let cart=[]

const Reducer = (state=initialstate,action) =>{
    switch(action.type)
    {

        // Clickable Category Changer
        case 'DISPLAY':
            let Displayproduct=[] 
            Displayproduct=state.localResponse.filter(product => product.category === action.localCategory)
            if(action.localCategory==='all-categories')
                Displayproduct=state.localResponse;
            return{
                ...state,
                products:[...Displayproduct]
            }
        break;

        //Get the response after page render initially
        case 'INITIAL':
                return{
                    ...state,
                    localResponse:action.localResponse,
                    products:action.Initialproduct
                }    
        break;

        //Decrement an item count from cart
        case 'CARTDELETER':
                
                let item = cart.find(item=> item.id === action.id)
                if(item.quantity > 0){ //check wether the item exists in cart or not if yes then decrease its quantity
                    item.quantity -= 1;
                }
                return{
                    ...state,
                    cartItem:[...cart],
                    CartCounter:cart.length
                }    
        break;

        //Add an item in cart
        case 'CARTADDER':
                let len = cart.length
                let alreadyInCart = cart.find(item=> item.id === action.id)
                if(alreadyInCart){ ////check wether the item exists in cart or not if yes then increase its quantity
                    alreadyInCart.quantity += 1;   
                }
                else{ // if item dont exist then add it in cart with quantity set to 0
                    let notInCart = state.localResponse.find(item=>item.id===action.id)   
                    cart[len]={
                        id:notInCart.id,
                        price:notInCart.price,
                        category:notInCart.category,
                        title:notInCart.title,
                        imageUrl:notInCart.imageUrl,
                        quantity:1
                    }
                }
            
                return{
                    ...state,
                    cartItem:[...cart],
                    CartCounter:cart.length
                }    
        break;

        // Deletion of an item from cart if it dont exists in shop
        case 'DELETION': 
                if(cart.length!=0)
                {
                    let searchedItem = cart.find(item=>item.id===action.id)
                    cart.splice(searchedItem,1)
                }
                return{
                    ...state,
                    cartItem:[...cart],
                    CartCounter:cart.length,
                    products:action.Initialproduct,
                    localResponse:action.localResponse
                }    
        break;

        //Manage the user and admin in title bar
        case 'USERCHANGERTRUE':
            return{
                ...state,
                isUser:true
            }
        break;

        //Manage the user and admin in title bar
        case 'USERCHANGERFALSE':
            return{
                ...state,
                isUser:false
            }
        break;
    }
    return state;
}
export default Reducer;