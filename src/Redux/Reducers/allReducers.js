import productReducer from './productReducer';
import counterReducer from './counterReducer';
import hideNavReducer from './hideNavReducer';
import slideReducer from './slideShowReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    productReducer,
    hideNav: hideNavReducer,
    slide: slideReducer
})


export default allReducers;