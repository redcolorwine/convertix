let initialState = {
    values: ['meter', 'kilometer', 'centimeter', 'decimeter'],
    col: 1,
    selectedvalueOne: 'meter',
    selectedvalueTwo: 'centimeter',
    result: 0
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULATEMATH': {
            debugger;
            if ((action.valOne === 'meter' && action.valTwo === 'centimeter') || (action.valOne === 'centimeter' && action.valTwo === 'meter')) {
                if (action.valOne === 'meter') {
                    return {
                        ...state,
                        result: action.col * 100
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 100
                    }
                }

            } else if ((action.valOne === 'meter' && action.valTwo === 'decimeter') || (action.valOne === 'decimeter' && action.valTwo === 'meter')) {
                if (action.valOne === 'meter') {
                    return {
                        ...state,
                        result: action.col * 10
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 10
                    }
                }

            }
            else if ((action.valOne === 'meter' && action.valTwo === 'kilometer') || (action.valOne === 'kilometer' && action.valTwo === 'meter')) {
                if (action.valOne === 'meter') {
                    return {
                        ...state,
                        result: action.col / 1000
                    }
                } else {
                    return {
                        ...state,
                        result: action.col * 1000
                    }
                }
            }
            else if ((action.valOne === 'kilometer' && action.valTwo === 'centimeter') || (action.valOne === 'centimeter' && action.valTwo === 'kilometer')) {
                if (action.valOne === 'kilometer') {
                    return {
                        ...state,
                        result: action.col * 100000
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 100000
                    }
                }
            } 
            else if ((action.valOne === 'kilometer' && action.valTwo === 'decimeter') || (action.valOne === 'decimeter' && action.valTwo === 'kilometer')) {
                if (action.valOne === 'kilometer') {
                    return {
                        ...state,
                        result: action.col * 10000
                    }
                } else {
                    return {
                        ...state,
                        result: action.col / 10000
                    }
                }
            }
            else if ((action.valOne === 'centimeter' && action.valTwo === 'decimeter') || (action.valOne === 'decimeter' && action.valTwo === 'centimeter')) {
                if (action.valOne === 'centimeter') {
                    return {
                        ...state,
                        result: action.col / 10
                    }
                } else {
                    return {
                        ...state,
                        result: action.col * 10
                    }
                }
            }
            else if (action.valOne === action.valTwo) {
                return {
                    ...state,
                    result: action.col * 1
                }
            }
            break;
        }
        case 'ONCOLCHANGEMATH': {
            return {
                ...state,
                col: action.col
            }

        }
        case 'SELECTFIRSTMATH': {
            debugger;
            return {
                ...state,
                selectedvalueOne: action.selectedvalueOne
            }
        }
        case 'SELECTSECONDMATH': {
            return {
                ...state,
                selectedvalueTwo: action.selectedvalueTwo
            }
        }
        default: return state;
    }
    return state;
}

export default mathReducer;