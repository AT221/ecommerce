function counterCreator(counterName = '', data){
    return function counter (state=0, action){
        switch(action.type){
            case `INCREASE_${counterName}`:
                return state + 1;
        
            case `DECREASE_${counterName}`:
                return state - 1;
        
            case `RESET_${counterName}`:
                return state = 0;

            case `${counterName}_LENGTH`:
                return state = data.length - 1;
                
                default:
                    return state;
        }
    }

}


export default counterCreator;
