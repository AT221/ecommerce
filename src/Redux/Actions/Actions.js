import axios from "axios"


export const increase = () =>{
    return{
        type: 'INCREASE'
    };
};

export const decrease = () =>{
    return {
        type: 'DECREASE'
    };
};


export const fetchProducts = () =>{
    return async (dispatch, getState)=>{
        dispatch({type: 'FETCH_PRODUCT_REQUEST'})
        try{
            const womensResponse = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionwomen?apikey=MKTaAVOoJ11d`);
            const mensResponse = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionmen?apikey=MKTaAVOoJ11d`);
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS', 
                payload_Womens: womensResponse.data.data,
                payload_Mens: mensResponse.data.data,
                payload_Ratings: womensResponse.data.product_ratings,
            })

        }catch (error){
            dispatch({
                type:'FETCH_PRODUCT_FAILURE',
                error
            })
        }
    }
}
