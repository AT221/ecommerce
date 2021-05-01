import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMens, fetchPosts} from '../../Redux/Actions/Actions';

const Gallery = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.productReducer);

    useEffect(() => {
       dispatch(fetchPosts());
    }, [])



    const renderPosts = () =>{
        if(state.loading){
            return <h1>Loading...</h1>;
        }
        return state.items.map((x)=>{
            return <h3>{x.product_name}</h3>

        })
    };


    return(
    <figure>
    {renderPosts()}
        {/* <p onClick={()=>dispatch(fetchMens())}>Men</p>
        <p onClick={()=>dispatch(fetchWomens())}>Women</p>
        <p onClick={()=>dispatch(fetchPosts())}>Down</p>
        {state.map((x)=>{
            return <h3>{x.product_name}</h3>
        })} */}



        </figure>
    )
}

export default Gallery ;

// Fashion Women

// Fashion Men