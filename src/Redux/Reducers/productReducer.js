const initState = {
    items:[],
    mensItems:[],
    loading: false,
    error: null
}


const productReducer = (state=initState, action)=>{
    switch(action.type){
        case 'FETCH_POSTS_REQUEST':
            return{
                ...state,
                loading:true,
                error:null,
            } 
        case 'FETCH_POSTS_SUCCESS':
            return{
                ...state,
                loading:false,
                items:action.payload,
                mensItems:action.payloads
            } 
        case 'FETCH_POSTS_FAILURE':
            return{
                ...state,
                loading:false,
                error: action.error
            } 
       
            default:
                return state;
    }
};
export default productReducer;