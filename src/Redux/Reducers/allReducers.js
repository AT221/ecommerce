import productReducer from './productReducer';
import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    productReducer,
})


export default allReducers;