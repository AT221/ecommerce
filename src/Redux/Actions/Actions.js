import axios from "axios"

//Checkout Counter
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

//Slider Actions
export const resetSlide = () =>{
    return {
        type: 'RESET_SLIDE'
    };
};

export const increaseSlide = () =>{
    return{
        type: 'INCREASE_SLIDE'
    };
};

export const decreaseSlide = () =>{
    return{
        type: 'DECREASE_SLIDE'
    };
};

export const slideLength = () =>{
    return{
        type: 'SLIDE_LENGTH'
    };
};

//Hiding Top Nav

export const up = () =>{
    return{
        type:'UP'
    }
}
export const down = () =>{
    return{
        type:'DOWN'
    }
}


//Fetching Products
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



