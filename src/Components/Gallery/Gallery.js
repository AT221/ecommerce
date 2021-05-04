import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../Redux/Actions/Actions';
import './_Gallery.scss'
import {handleRatings} from '../../Functions/Ratings/Ratings';

const Gallery = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.productReducer);

    useEffect(() => {
       dispatch(fetchProducts());
    }, [])


    const renderWomens = () =>{
        if(state.loading){
            return <h1>Loading...</h1>;
        }
        return state.womensItems.map((x)=>{
        return(
            <div className='product_container'>
                <figure>
                    <img className='product_img' src={x.product_image_md}/>
                    <figcaption>{x.product_name}</figcaption>
                    <figcaption>${x.product_price}</figcaption>
                    <figcaption>Rating: 
                    {handleRatings(x.product_ratings)} 
                    </figcaption>
                    {/* <figcaption className='color' style={{backgroundColor: x.product_color}}>{x.product_color}</figcaption> */}
                    <figcaption > <button>Add To Cart</button></figcaption>
                    <figcaption >
                </figcaption>
                </figure>

            </div>
        )   
        })
    };


    return(
    <div className='product_whole_container'>
        {renderWomens()}
        {/* <p onClick={()=>dispatch(fetchMens())}>Men</p>
        <p onClick={()=>dispatch(fetchWomens())}>Women</p>
        <p onClick={()=>dispatch(fetchPosts())}>Down</p>
        {state.map((x)=>{
            return <h3>{x.product_name}</h3>
        })} */}
        </div>
    )
}

export default Gallery ;

// Fashion Women

// Fashion Men