import { connect } from 'react-redux';
import Finance from './finance';

let mapStateToProps = (state) => {
    return {
        values: state.financePage.values,
        col: state.financePage.col,
        result: state.financePage.result,
        selectedvalueOne: state.financePage.selectedvalueOne,
        selectedvalueTwo: state.financePage.selectedvalueTwo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        calculate: (col, valOne, valTwo) => {
            dispatch({
                type: 'CALCULATE',
                col: col,
                valOne: valOne,
                valTwo: valTwo
            })
        },
        oncolChange: (col) => {
            dispatch({
                type: 'ONCOLCHANGE',
                col: col
            })
        },
        selectFirst: (selectedvalueOne) => {
            dispatch({
                type: 'SELECTFIRST',
                selectedvalueOne
            })
        },
        selectSecond: (selectedvalueTwo) => {
            dispatch({
                type: 'SELECTSECOND',
                selectedvalueTwo
            })
        },
    }
}

let FinanceContainer = connect(mapStateToProps, mapDispatchToProps)(Finance);

export default FinanceContainer;