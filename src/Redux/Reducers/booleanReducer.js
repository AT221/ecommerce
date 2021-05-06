function booleanReducer(booleanName = ''){
    return function boolean (state=false, action){
        switch(action.type){
            case `${booleanName}_BOOLEAN`:
                return !state;
                default:
                    return state;
        }
    }

}


export default booleanReducer;
