import { connect } from 'react-redux';
import MathPhys from './math';

let mapStateToProps=(state)=>{
    return{
        values: state.mathPage.values,
        col: state.mathPage.col,
        result: state.mathPage.result,
        selectedvalueOne: state.mathPage.selectedvalueOne,
        selectedvalueTwo: state.mathPage.selectedvalueTwo
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        calculate: (col, valOne, valTwo) => {
            dispatch({
                type: 'CALCULATEMATH',
                col: col,
                valOne: valOne,
                valTwo: valTwo
            })
        },
        oncolChange: (col) => {
            dispatch({
                type: 'ONCOLCHANGEMATH',
                col: col
            })
        },
        selectFirst: (selectedvalueOne) => {
            dispatch({
                type: 'SELECTFIRSTMATH',
                selectedvalueOne
            })
        },
        selectSecond: (selectedvalueTwo) => {
            dispatch({
                type: 'SELECTSECONDMATH',
                selectedvalueTwo
            })
        },
    }
}

let MathContainer=connect(mapStateToProps,mapDispatchToProps)(MathPhys);

export default MathContainer;