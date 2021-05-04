import productReducer from './productReducer';
import counterReducer from './counterReducer';
import hideNavReducer from './hideNavReducer';
import counterCreator from './slideShowReducer';
// import slideReducer from './slideShowReducer';
import {combineReducers} from 'redux';

import {SlideShowData} from '../../Components/Slideshow/SlideShowData';


const allReducers = combineReducers({
    counter: counterReducer,
    productReducer,
    hideNav: hideNavReducer,
    slide: counterCreator('SLIDE', SlideShowData)
    // slide: slideReducer
})


export default allReducers;