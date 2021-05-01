import React from 'react';
import './_HomePage.scss';

import Shirt from '../Images/SlideShow/Shirt.jpg';
import Backpack from '../Images/SlideShow/Backpack.jpg';
import Purse from '../Images/SlideShow/Purse.jpg';

const HomePage= () => {

    return(
        <div className='homePage-Container'>
            <a>&#10094;</a>
            <div className='img-container'>
                <img src={Shirt} />

                <img src={Purse}/>
                <img src={Backpack}/>
            </div>
            <a>&#10095;</a>
        </div>
    )
}

export default HomePage;