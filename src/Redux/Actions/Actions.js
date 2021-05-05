import axios from "axios"

//Checkout Counter 

//DELETE THESE LATER ON  AND USE SLIDER ACTIONS BELOW
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
export const resetSlide = (name) =>{
    return {
        type:`RESET_${name}`
    };
};

export const increaseSlide = (name) =>{
    return{
        type: `INCREASE_${name}`
    };
};

export const decreaseSlide = (name) =>{
    return{
        type: `DECREASE_${name}`
    };
};

export const slideLength = (name) =>{
    return{
        type: `${name}_LENGTH`
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



