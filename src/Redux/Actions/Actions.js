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

// Handling The Shipping
export const changeShipping = (country, num) =>{
    return{
        type: `${country}_${num}`
    }
}

//True false

export const changeBoolean = (boo) =>{
    return{
        type:`${boo}_BOOLEAN`
    }
}



//Fetching Products
export const fetchProducts = () =>{
    return async (dispatch, getState)=>{
        dispatch({type: 'FETCH_PRODUCT_REQUEST'})
        try{
            const womensResponse = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionwomen?apikey=MKTaAVOoJ11d`);
            const mensResponse = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionmen?apikey=MKTaAVOoJ11d`);
            const topSoldMens=  await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionmen/topsales?apikey=MKTaAVOoJ11d`);
            const topSoldWomens =  await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionwomen/topsales?apikey=MKTaAVOoJ11d`);
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS', 
                payload_Womens: womensResponse.data.data,
                payload_Mens: mensResponse.data.data,

                //top sold
                payload_TopSoldMens: topSoldMens.data.data,
                payload_TopSoldWomens: topSoldWomens.data.data
            })

        }catch (error){
            dispatch({
                type:'FETCH_PRODUCT_FAILURE',
                error
            })
        }
    }
}



