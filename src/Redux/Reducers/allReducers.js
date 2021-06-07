import productReducer from './productReducer';
import counterReducer from './counterReducer';
import hideNavReducer from './hideNavReducer';
import counterCreator from './counterCreatorReducer';
import country from './countryReducer';
import booleanReducer from './booleanReducer';

import {combineReducers} from 'redux';

import {SlideShowData} from '../../Components/Slideshow/SlideShowData';
import {ReviewData} from '../../Data/ReviewData';

const allReducers = combineReducers({
    counter: counterReducer,
    productReducer,
    hideNav: hideNavReducer,
    slide: counterCreator('SLIDE', SlideShowData),
    reviewSlide: counterCreator('REVIEW', ReviewData),
    country,
    search : booleanReducer('SEARCH')
})


export default allReducers;