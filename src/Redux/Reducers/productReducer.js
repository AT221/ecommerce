const initState = {
    womensItems:[],
    mensItems:[],
    topSoldMens:[],
    topSoldWomens:[],

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
                topSoldMens:action.payload_TopSoldMens,
                topSoldWomens:action.payload_TopSoldWomens,

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