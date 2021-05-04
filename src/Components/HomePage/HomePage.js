import React from 'react';
import './_HomePage.scss';
import {HomePageImages} from '../../Data/HomePageImages';
import { ReviewData } from '../../Data/ReviewData';
import {handleRatings} from '../../Functions/Ratings/Ratings';

const HomePage= () => {

    return(
        <div className='homePage-container'>
            <div className='sustain'>
                <h4>Aye. T. C. Unlimited is a brand built on sustainability using 95% recycled and natural materials in all of our products.
                We use a proprietary recycling method that allows our products to retain their quailty, comfort, and colors.</h4>
            </div>
            <div className='figure-div'>
            {HomePageImages.map((image, index)=>{
                return(
                <figure className='figure-container'>
                    <img src={image.image}></img>
                    <figcaption>{image.description}</figcaption>
                    <hr/>
                </figure>
                )
            })}
            </div>


            
            <div className='review-heading'>
                <h4>Customer Reviews</h4>
                <hr/>
            <div className='review-container'>
            {ReviewData.map((data,index)=>{
                return(
                <div>
                    <ul className='ratings-container'>
                        <li>{handleRatings(5)}</li>

                    </ul>
                <ul className='review-list'>
                    <li>{data.title}</li>
                    <li>{data.description}</li>
                    <li>{data.name}</li>
                </ul>
                </div>


                )
            })}
            </div>

    
            </div>
        </div>
    )
}

export default HomePage;