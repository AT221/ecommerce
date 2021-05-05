const initState = {
    usa: true,
    canada: false,
    uk:false,
    mexico: false,
    japan: false
}



    const  country = (state=initState, action) =>{
        switch(action.type){
            case `USA_1`:
                return {
                    ...state,
                    usa:true,
                    canada: false,
                    uk:false,
                    mexico: false,
                    japan: false
                }
            case `CANADA_2`:
                return {
                    ...state,
                    usa:false,
                    canada:true,
                    uk:false,
                    mexico: false,
                    japan: false
                }
            case `UK_3`:
                return {
                    ...state,
                    usa:false,
                    canada: false,
                    uk:true,
                    mexico: false,
                    japan: false,
                }
            case `MEXICO_4`:
                return {
                    ...state,
                    usa:false,
                    canada: false,
                    uk:false,
                    mexico:true,
                    japan: false,
                }
            case `JAPAN_5`:
                return {
                    ...state,
                    usa:false,
                    canada: false,
                    uk:false,
                    mexico: false,
                    japan:true,
                }

                
                default:
                    return state;
        }
    }




export default country;
