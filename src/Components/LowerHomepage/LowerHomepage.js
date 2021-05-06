import React from 'react';
import './_LowerHomepage.scss';
import {useSelector} from 'react-redux';
import {useApi} from '../../Functions/API/Api';
import {renderProduct} from '../../Functions/ProductRender/ProductRender';
import {EndorsementImgs} from '../../Data/EndorsementData';


const LowerHomepage = () => {

    const state = useSelector(state=> state.productReducer);
    const topProduct = state.topSold.splice(0,4);

    useApi()
    return(
        <div>
            <div className='top-product-container'>
                <h2>Top Sellers</h2>
                <hr></hr>
            </div>
            <div className='product-div'>
                {renderProduct( topProduct)}
            </div>

            <div className='endorsement-container'>
                {EndorsementImgs.map((image, index)=>{
                     return(
                     <figure className='figure-container'>
                         <img src={image.image}></img>
                         <figcaption>{image.description}</figcaption>
                     </figure>
                     )
                 })}
            </div>

        </div>
    )
}

export default LowerHomepage ;