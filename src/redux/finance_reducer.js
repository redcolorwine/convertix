let initialState = {
    values: ['euro', 'dollar', 'rub'],
    col: 1,
    selectedvalueOne: 'euro',
    selectedvalueTwo: 'euro',
    result: 0
}

const financeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CALCULATE': {
            
            if ((action.valOne === 'euro' && action.valTwo === 'rub') || (action.valOne === 'rub' && action.valTwo === 'euro')) {
                if (action.valOne === 'euro') {
                    return {
                        ...state,
                        result: action.col * 86
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 86
                    }
                }

            } else if ((action.valOne === 'euro' && action.valTwo === 'dollar') || (action.valOne === 'dollar' && action.valTwo === 'euro')) {
                if (action.valOne === 'euro') {
                    return {
                        ...state,
                        result: action.col * 1.13
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 1.13
                    }
                }

            }
            else if ((action.valOne === 'dollar' && action.valTwo === 'rub') || (action.valOne === 'rub' && action.valTwo === 'dollar')) {
                if (action.valOne === 'dollar') {
                    return {
                        ...state,
                        result: action.col * 74
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 74
                    }
                }
            } else if (action.valOne===action.valTwo){
                return{
                    ...state,
                    result: action.col * 1
                }
            }
            break;
        }
        case 'ONCOLCHANGE': {
            return {
                ...state,
                col: action.col
            }

        }
        case 'SELECTFIRST': {
            debugger;
            return {
                ...state,
                selectedvalueOne: action.selectedvalueOne
            }
        }
        case 'SELECTSECOND': {
            return {
                ...state,
                selectedvalueTwo: action.selectedvalueTwo
            }
        }
        default: return state;
    }
    return state;
}

export default financeReducer;