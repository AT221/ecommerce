import React from 'react';
import './_HomePage.scss';
import {HomePageImages} from '../../Data/HomePageImages';
import { ReviewData } from '../../Data/ReviewData';
import {handleRatings} from '../../Functions/Ratings/Ratings';
import {useSelector, useDispatch} from 'react-redux';
import {increaseSlide, decreaseSlide, resetSlide, slideLength} from '../../Redux/Actions/Actions';


const HomePage= () => {
    const dispatch = useDispatch();
    const state = useSelector(state=> state.reviewSlide);
    const length = ReviewData.length;

    const startSplice = ReviewData.slice(0,3);
    const endSplice = ReviewData.slice(3,6);

    const nextSlide = () =>{
        state === length - 1 ? dispatch(resetSlide('REVIEW')) : dispatch(increaseSlide('REVIEW'));
      }
      const prevSlide = () =>{
        state === 0  ?  dispatch(slideLength('REVIEW')) : dispatch(decreaseSlide('REVIEW'));
      }      

     
      const renderReviews = () =>{
        if(state % 2 === 1){
            return startSplice.map((data,index)=>{
            return(
                <div key={index}>
               
                    <div>
                    <ul className='ratings-container'>
                        <li>{handleRatings(5)}</li>
                    </ul>
                <ul className='review-list'>
                    <li>{data.title}</li>
                    <hr className='title-hr'/>
                    <li>{data.description}</li>
                    <li>{data.name}</li>
                </ul>
                    </div>
              
                </div>
            )   
            })
        }else{
            return endSplice.map((data,index)=>{
                return(
                    <div  key={index}>
                   
                        <div>
                        <ul className='ratings-container'>
                            <li>{handleRatings(5)}</li>
                        </ul>
                    <ul className='review-list'>
                        <li>{data.title}</li>
                        <hr className='title-hr'/>
                        <li>{data.description}</li>
                        <li>{data.name}</li>
                    </ul>
                        </div>
                  
                    </div>
                )   
                })
        }
    };



    return(
        <div className='homepage-container'>
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
                <h4>Customer Reviews<hr/></h4>
            <a className='review-left-arrow' onClick={prevSlide}>&#10094;</a> 
            <a className='review-right-arrow' onClick={nextSlide} >&#10095;</a>
            <div className='review-container'>
            {renderReviews()}
            </div>
            </div>
        </div>
    )
}

export default HomePage;