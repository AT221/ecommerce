import productReducer from './productReducer';
import counterReducer from './counterReducer';
import hideNavReducer from './hideNavReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    productReducer,
    hideNav: hideNavReducer
})


export default allReducers;