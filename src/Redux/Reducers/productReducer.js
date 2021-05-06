const initState = {
    womensItems:[],
    mensItems:[],
    topSold:[],

    loading: false,
    error: null
}



const productReducer = (state=initState, action)=>{
    switch(action.type){
        case 'FETCH_PRODUCT_REQUEST':
            return{
                ...state,
                loading:true,
                error:null,
            } 
        case 'FETCH_PRODUCT_SUCCESS':
            return{
                ...state,
                loading:false,
                womensItems:action.payload_Womens,
                mensItems:action.payload_Mens,
                topSold:action.payload_TopSold,

            } 
        case 'FETCH_PRODUCT_FAILURE':
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