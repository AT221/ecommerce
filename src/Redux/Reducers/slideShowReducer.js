function counterCreator(counterName = '', data){
    return function counter (state=0, action){
        switch(action.type){
            case `INCREASE_${counterName}`:
                return state + 1;
        
            case `DECREASE${counterName}`:
                return state - 1;
        
            case `RESET${counterName}`:
                return state = 0;
            case `${counterName}_LENGTH`:
                return state = data.length - 1;
                default:
                    return state;
        }
    }

}


export default counterCreator;



// import {SlideShowData} from '../../Components/Slideshow/SlideShowData';

// const slideReducer = (state = 0, action) =>{
//     switch(action.type){
//         case 'INCREASE_SLIDE':
//             return state + 1;
        
//         case 'DECREASE_SLIDE':
//             return state - 1;

//         case 'RESET_SLIDE':
//             return state = 0;

//         case 'SLIDE_LENGTH':
//             return state = SlideShowData.length - 1;
        
//         default:
//             return state;
//     }
// }

// export default slideReducer;