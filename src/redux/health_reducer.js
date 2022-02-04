let initialState = {
    weight: 72,
    growth: 170,
    result: 0,
    descriptionIMT: undefined
}

const healthReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CALCULATEIMT': {
            
            return {
                ...state,
                result: (action.weight / (action.growth * action.growth)) * 10000
                
            }
        }
        case 'WEIGHTCHANGE':{
            return{
                ...state,
                weight:action.weight
            }
        }
        case 'GROWTHCHANGE':{
            return{
                ...state,
                growth:action.growth
            }
        }
        default: return state;
    }



}

export default healthReducer;