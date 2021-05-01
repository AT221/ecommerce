import productReducer from './productReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    productReducer
})


export default allReducers;