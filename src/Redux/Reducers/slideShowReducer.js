import {SlideShowData} from '../../Components/Slideshow/SlideShowData';

const slideReducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREASE_SLIDE':
            return state + 1;
        
        case 'DECREASE_SLIDE':
            return state - 1;

        case 'RESET_SLIDE':
            return state = 0;

        case 'SLIDE_LENGTH':
            return state = SlideShowData.length - 1;
        
        default:
            return state;
    }
}

export default slideReducer;