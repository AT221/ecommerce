import {SlideShowData} from '../../Components/Slideshow/SlideShowData';

const slideReducer = (state = SlideShowData.length, action) =>{
    switch(action.type){
        case 'INCREASE':
            return state +1;
        
        case 'DECREASE':
            return state -1;
        
        default:
            return state;
    }
}

export default slideReducer;