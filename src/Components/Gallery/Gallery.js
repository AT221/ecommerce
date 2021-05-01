import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../../Redux/Actions/Actions';
import './_Gallery.scss'


const Gallery = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.productReducer);

    useEffect(() => {
       dispatch(fetchProducts());
    }, [])

     var handleRatings = (x)=>{
        if(x === 0){
            return (
                <div className='stars'>
                 
                        <p>No Ratings Yet</p>
                
                </div>
        )}else if(x === 1){
            return (
                <div className='star_container'>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                </div>
            
        )}else if(x === 2){
            return (
                <div className='star_container'>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                    <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                </div>
        )}else if(x === 3){
            return (
                 <div className='star_container'>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                </div>
        )}else if(x === 4){
             return (
                 <div className='star_container'>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                </div>
        )}else if(x === 5){
            return (
                 <div className='star_container'>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                        <img src="https://img.icons8.com/fluent/48/000000/star.png"/>
                </div>
                        )}
    }

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