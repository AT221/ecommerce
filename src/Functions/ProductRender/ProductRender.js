import {handleRatings} from '../../Functions/Ratings/Ratings';
import './_ProductRender.scss';

export const renderProduct = (state) =>{
    if(state.loading){
        return <h1>Loading...</h1>;
    }
    return state.map((x)=>{
    return(
    <div className='product_whole_container'>

        <div className='product_container'>
            <figure>
                <img className='product_img' src={x.product_image_md}/>
                <figcaption>{x.product_name}</figcaption>
                <figcaption>${x.product_price}</figcaption>
                <figcaption>Rating: 
                {handleRatings(x.product_ratings)} 
                </figcaption>
                <figcaption > <button>Add To Cart</button></figcaption>
                <figcaption >
            </figcaption>
            </figure>

        </div>
    </div>
    )   
    })
};
