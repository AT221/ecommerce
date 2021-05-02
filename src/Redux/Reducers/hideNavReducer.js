const hideNavReducer = (state = false, action)=>{
    switch(action.type){
        case 'UP':
            return state= false;
        case 'DOWN':
            return state= true;
        default:
            return state;
    }
}

export default hideNavReducer;