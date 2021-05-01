import axios from "axios"

export const fetchPosts = () =>{
    return async (dispatch, getState)=>{
        dispatch({type: 'FETCH_POSTS_REQUEST'})
        try{
            const response = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionwomen?apikey=MKTaAVOoJ11d`);
            const mensResponse = await axios.get(`https://dummyproducts-api.herokuapp.com/api/v1/departments/fashionmen?apikey=MKTaAVOoJ11d`);

            dispatch({
                type: 'FETCH_POSTS_SUCCESS', 
                payload: response.data.data,
                payloads: mensResponse.data.data
            })

        }catch (error){
            dispatch({
                type:'FETCH_POSTS_FAILURE',
                error
            })
        }
    }
}


